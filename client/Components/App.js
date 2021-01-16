import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test',
    };
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/notebook1">Note Book 1</Link>
            </li>
            <li>
              <Link to="/notebook2">Note Book 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/notebook1">
            <h1>placeholder for notebook1</h1>
          </Route>
          <Route path="/notebook2">
            <h1>placeholder for notebook2</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

function Home() {
  return <h2>Home Function</h2>;
}

export default App;
