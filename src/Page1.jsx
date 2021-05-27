import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/a">Page1-A</Link>
      <br />
      <Link to="/page1/b">Page1-B</Link>
    </div>
  );
};
