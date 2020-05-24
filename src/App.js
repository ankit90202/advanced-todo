import React from "react";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes/routes";
import { Route, Switch, Redirect } from "react-router-dom";
import TodoContextProvider from "./context/TodoContext";

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
    <TodoContextProvider>
      <div className="row">
        <div className="col-md-2">
          <Navigation />
        </div>
        <div className="col-md-7">
          <Switch>
            {route}
            <Redirect to="not-found" />
          </Switch>
        </div>
        <div className="col-md-3">Right SideBar</div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
