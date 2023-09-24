import { useSelector } from "react-redux";

import { RootState } from "../store";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div className="mt-10 px-4 text-center">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ?
        <CreateUser /> : <Button to="/menu">Continue ordering, {username}</Button>
      }
    </div>
  );
}

export default Home;
