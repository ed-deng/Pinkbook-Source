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

  // path={`${match.path}/:topicId`}>
  // matchPath("/users/2", {
  //   path: "/users/:id",
  //   exact: true,
  //   strict: true
  // });

  render() {
    const generateLinks = this.state.navigation.map((notebook) => {
      const { _id: id, _id: reactKey, name } = notebook;
      console.log(id, name);
      return (
        <li key={reactKey}>
          <Link to={`/${id}`}>{name}</Link>
        </li>
      );
    });

    const generateNotebookRoutes = this.state.navigation.map((notebook) => {
      const { _id: id, _id: reactKey, name } = notebook;

      return (
        <Route key={reactKey} path={`/${id}`}>
          <h1>{name}</h1>
        </Route>
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
          {generateNotebookRoutes}
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
