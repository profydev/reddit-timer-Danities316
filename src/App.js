import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route path='/'>
      App Placeholder
      </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
