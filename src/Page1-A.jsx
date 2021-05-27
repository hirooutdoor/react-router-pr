import { useLocation } from "react-router-dom";

export const Page1A = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1-A</h1>
    </div>
  );
};
