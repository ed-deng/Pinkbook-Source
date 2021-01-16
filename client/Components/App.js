import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Swtich: it searches through its children <Route> elements to find one whose path matches the current URL
// One important thing to note is that a <Route path> matches the beginning of the URL, not the whole thing. So a <Route path="/"> will always match the URL. Because of this, we typically put this <Route> last in our <Switch>. Another possible solution is to use <Route exact path="/"> which does match the entire URL.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: [
        {
          _id: 1,
          name: 'Note Book 1',
        },
        {
          _id: 2,
          name: 'Note Book 2',
        },
        {
          _id: 3,
          name: 'Note Book 3',
        },
      ],
      notebookDetails: null,
    };
  }

  render() {
    const generateLinks = this.state.navigation.map((notebook) => {
      const { _id: id, _id: reactKey, name } = notebook;

      return (
        <li key={reactKey}>
          <Link to="/{name}}">{name}</Link>
        </li>
      );
    });

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page!</Link>
            </li>
            {generateLinks}
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
