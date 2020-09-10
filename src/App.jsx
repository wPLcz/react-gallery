import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from "./components/Loader";
import LandingPage from "./pages/LandingPage";
const AsyncGallery = React.lazy(() => import('./pages/SingleGalleryPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <Router>
      <Switch>
        <Route
          path="/gallery"
          render={props => <AsyncGallery other={props}/>}
        />
        <Route
          path="/"
          render={props => <LandingPage other={props}/>}
          />
      </Switch>
    </Router>
    </Suspense>
  );
};

export default App;
