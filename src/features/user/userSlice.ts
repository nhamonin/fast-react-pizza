import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { getAddress } from "../../services/apiGeocoding";

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

type UserState = {
  username: string;
  status: "idle" | "pending" | "error";
  position?: {
    latitude: number;
    longitude: number;
  };
  address: string;
  error?: string;
};

const initialState: UserState = {
  username: "",
  status: "idle",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.status = "idle";
      state.position = action.payload.position;
      state.address = action.payload.address;
    });
    builder.addCase(fetchAddress.rejected, (state, action) => {
      state.status = "error";
      state.error =
        "There was a problem getting your address. Please try again later.";
    });
  },
});

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state: RootState) => state.user.username;
