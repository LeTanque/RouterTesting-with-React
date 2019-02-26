import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="">
            <ul className="">
              <li><Link to={'/'} className=""> Home </Link></li>
              <li><Link to={'/contact'} className="">Contact</Link></li>
              <li><Link to={'/about'} className="">About</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
