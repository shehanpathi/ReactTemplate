import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { TestContext } from './common/context';
import { TestProvider } from './common/context';
import Hello from './Hello'
import World from './World';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (

    <Router>

      <TestProvider>
        <Route path="/hello" component={Hello} />
      </TestProvider>
      <Route path="/world">
        <World />
      </Route>
    </Router>
  );
}

export default App;
