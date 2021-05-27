import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/a", state: arr }}>Page1-A</Link>
      <br />
      <Link to="/page1/b">Page1-B</Link>
    </div>
  );
};
