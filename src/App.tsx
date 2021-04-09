import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
      </Switch>
    </Router>
  );
}

export default App;
