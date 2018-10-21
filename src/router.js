import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Login from "./routes/Login/index";
import ListInform from "./components/List/list";
import submission from "./components/submissionAdd";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/a" component={submission} />
        <Route path="/list" component={ListInform} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
