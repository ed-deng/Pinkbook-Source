import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Notebook from './Notebook.jsx';
import Home from './Home.jsx';

// Swtich: it searches through its children <Route> elements to find one whose path matches the current URL
// One important thing to note is that a <Route path> matches the beginning of the URL, not the whole thing. So a <Route path="/"> will always match the URL. Because of this, we typically put this <Route> last in our <Switch>. Another possible solution is to use <Route exact path="/"> which does match the entire URL.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebookList: [],
    };
    this.deleteSkillsCard = this.deleteSkillsCard.bind(this);
  }

  deleteSkillsCard(events, id) {
    console.log(events);
    console.log(id);

  }

  componentDidMount() {
    //fetches all information on all notebooks
    fetch('/api/all')
      .then((res) => res.json())
      .then((data) => this.setState({ notebookList: data }));
  }

  render() {
    const generateLinks = this.state.notebookList.map((notebook) => {
      const { _id: id, _id: reactKey, name } = notebook;
      console.log(id, name);
      return (
        <li key={reactKey}>
          <Link to={`/${id}`}>{name}</Link>
        </li>
      );
    });

    const generateNotebookRoutes = this.state.notebookList.map((notebook) => {
      const {
        _id: id,
        _id: reactKey,
        name,
        description,
        skills,
        reminders,
        notes,
      } = notebook;


      return (
        <Route key={reactKey} path={`/${id}`}>
          <h1>{name}</h1>
          <Notebook
            id={id}
            reactKey={reactKey}
            description={description}
            skills={skills}
            reminders={reminders}
            deleteSkillsCard={this.deleteSkillsCard}
          />
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

export default App;
