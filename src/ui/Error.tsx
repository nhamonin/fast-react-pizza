import { useNavigate, useRouteError, ErrorResponse } from "react-router-dom";

import LinkButton from "./LinkButton";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponse;

  return (
    <div>
      <h1>Something get wrong :c</h1>
      <p>{error.data}</p>
      <p>%MESSAGE%</p>
      <button onClick={() => navigate(-1)}></button>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
