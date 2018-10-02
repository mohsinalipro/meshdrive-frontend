import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
