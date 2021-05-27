import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1A } from "../Page1-A";
import { Page1B } from "../Page1-B";
import { Page2 } from "../Page2";
import { Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/a`}>
              <Page1A />
            </Route>
            <Route path={`${url}/b`}>
              <Page1B />
            </Route>
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
