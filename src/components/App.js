import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotesContainer from './NotesContainer';
import NotesContent from './NotesContent';
import NewNote from './NewNote';
import history from '../history';
import './App.css';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={NotesContainer} />
            <Route path="/notepad/note/:id" exact component={NotesContent} />
            <Route path="/notepad/new-note" exact component={NewNote} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
