import { useNavigate, useRouteError, ErrorResponse } from "react-router-dom";

import LinkButton from "./LinkButton";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">Something went wrong :c</h1>
      <p className="text-2xl font-semibold">{error.data}</p>
      <p className="italic">%MESSAGE%</p>
      <button onClick={() => navigate(-1)}></button>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
