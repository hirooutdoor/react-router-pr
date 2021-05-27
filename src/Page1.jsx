import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const handleClick = () => history.push("/page1/a");

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/a", state: arr }}>Page1-A</Link>
      <br />
      <Link to="/page1/b">Page1-B</Link>
      <br />
      <button onClick={handleClick}>Page1-A</button>
    </div>
  );
};
