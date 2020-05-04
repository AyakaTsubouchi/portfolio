import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Consumer } from "../contexts/Context";
import Landing from "./Landing";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./sideDrawer/SideDrawer";
import Backdrop from "./backdrop/BackDrop";
import About from "./About";
import Works from "./works/Works";
import Contact from "./Contact";
import "./scss/style.css";

const App = () => (
  <div className="app">
    <div className="gradient">
      <Router>
        <Consumer>
          {({ isOpen }) => (
            <>
              <Toolbar />
              <SideDrawer isOpen={isOpen} />
              <Backdrop />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </>
          )}
        </Consumer>
      </Router>
    </div>
  </div>
);
export default App;
