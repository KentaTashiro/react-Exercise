import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  return (
    <Route>
      <Login />
    </Route>
  );
});