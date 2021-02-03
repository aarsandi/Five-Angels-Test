import React from 'react';
import './scss/index.css';
import Home from './views/Home'
import Soal1 from './views/Soal1'
import Soal2 from './views/Soal2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/soal2">
          <Soal2/>
        </Route>
        <Route exact path="/soal1">
          <Soal1/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;