import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">App Placeholder</Route>

          <Route path="/search">Search</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
