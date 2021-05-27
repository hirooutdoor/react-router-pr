import { BrowserRouter } from "react-router-dom";

import { Page1 } from "./Page1";
import { Home } from "./Home";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
}
