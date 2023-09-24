import { Position } from "../types/Position";

interface AddressObj {
  locality?: string;
  city?: string;
  postcode?: string;
  countryName?: string;
}

export async function getAddress(position: Position): Promise<AddressObj> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
