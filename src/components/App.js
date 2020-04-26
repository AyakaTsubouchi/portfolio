import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './Context';
import Landing from './Landing';
import Header from './Header';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import './scss/style.css';

const App = () => (
  <div className="app">
    <Router>
      <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Provider>
    </Router>
  </div>
);
export default App;
