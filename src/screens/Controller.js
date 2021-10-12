import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Profile from './profile/Profile';

class Controller extends Component {
  constructor() {
    super();
    this.baseUrl = "";
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route
            exact
            path={"/RickMortyApi/"} 
            render={(props) => <Home {...props} baseUrl={this.baseUrl} />}
          />
          <Route path={'/RickMortyApi/profile/:id'} render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    );
  }
}

export default Controller;
