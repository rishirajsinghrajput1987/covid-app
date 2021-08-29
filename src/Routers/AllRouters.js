import react from "react";
import { Route, Switch } from "react-router-dom";
import CovidTracker from "../components/CovidTracker";
import Login from "../components/Login";
const AllRouters = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CovidTracker />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default AllRouters;
