import { useEffect, useState } from 'react';
import './App.css';
import Random from './Random';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QuoteList from './QuoteList';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
             <Random/>
          </Route>
          <Route exact path="/:name">
             <QuoteList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
