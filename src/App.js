import React from "react";
import DashBoard from "./component/DashBoard";
import Header from "./component/Header";
import Cards from "./component/Cards";
import Graph from "./component/Graph";
import UserDetails from "./component/UserDetails";

import { BrowserRouter, Route, Switch } from "react-router-dom";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  
  render() {
    return (
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Switch>
            <Route path="/users">
              <DashBoard />
              <div id="right-side">
                <Header text='Patients' />
                <UserDetails />
              </div>
            </Route>
            <Route path="">
              <DashBoard />
              <div id="right-side">
                <Header text='Covid 19 Tracker - Sokan Edition' />
                <Cards data={global} />
                <Graph />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
