import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>Sorry, can't find the page.</h1>
      <Link to="/">Back to TOP</Link>
    </div>
  );
};
