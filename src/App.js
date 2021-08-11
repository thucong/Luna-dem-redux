import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes.js";
import "./styles.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends Component {
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
      return result;
    }
  };
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>{this.showContentMenus(routes)}</Switch>
        </Router>
      </div>
    );
  }
}

export default App;
