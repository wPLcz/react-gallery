import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import SingleGalleryPage from "./pages/SingleGalleryPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/gallery"
          render={props => <SingleGalleryPage other={props}/>}
        />
        <Route
          path="/"
          render={props => <LandingPage other={props}/>}
          />
      </Switch>
    </Router>
  );
};

export default App;
