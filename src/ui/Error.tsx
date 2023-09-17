import { useNavigate, useRouteError, ErrorResponse } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorResponse;

  return (
    <div>
      <h1>Something get wrong :c</h1>
      <p>{error.data}</p>
      <p>%MESSAGE%</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
