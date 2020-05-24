import React from "react";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes/routes";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const route = routes.map((route, index) => (
    <Route
      exact
      key={`route-${index}`}
      path={route.path}
      component={route.component}
    />
  ));

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-6">
          <Switch>
            {route}
            <Redirect to="not-found" />
          </Switch>
        </div>
        <div className="col-md-3">Right SideBar</div>
      </div>
    </div>
  );
}

export default App;
