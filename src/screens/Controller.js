import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Profile from './profile/Profile';

class Controller extends Component {
  constructor() {
    super();
    this.baseUrl = "https://pokeapi.co/api/v2";
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route
            exact
            path="/RickMortyApi"
            render={(props) => <Home {...props} baseUrl={this.baseUrl} />}
          />
          {/* <Route path='/restaurant/:id' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} /> */}
          <Route path='/RickMortyApi/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
          {/* <Route path="/" exact {...props} component={HomePage} /> */}
          {/* <Route path="/chars" exact {...props} component={CharList} /> */}
          {/* <Route path="/chars/:id" {...props} component={SoloChar} /> */}
        </div>
      </Router>
    );
  }
}

export default Controller;
