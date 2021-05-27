import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  //console.log(query.get("name"));

  return (
    <div>
      <h1>UrlParameter Page</h1>
      <p>Parameter is {id}.</p>
      <p>query Paramer is {query.get("name")}.</p>
    </div>
  );
};
