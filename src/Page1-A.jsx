import { useLocation, useHistory } from "react-router-dom";

export const Page1A = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const handleBack = () => history.goBack();

  return (
    <div>
      <h1>Page1-A</h1>
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};
