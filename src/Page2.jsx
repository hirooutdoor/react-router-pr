import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/2311">Url Parameter</Link>
      <br />
      <Link to="/page2/2311?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
