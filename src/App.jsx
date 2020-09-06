import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import SingleGalleryPage from "./pages/SingleGalleryPage";

const App = (store) => {
  return (
    <Router>
      <Switch>
        <Route path="/gallery">
          <SingleGalleryPage/>
        </Route>

        <Route exact path="/single">
        </Route>

        <Route exact path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
};

const StyledApp = styled(App)`
    background-color: blue;
`;


export default App;
