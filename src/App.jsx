import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from "./components/common/Loader";

const LazyLandingPage = lazy(() => import('./pages/LandingPage'));
const LazySingleGalleryPage = lazy(() => import('./pages/SingleGalleryPage'));

const App = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader/>}>
        <Route
          path="/gallery"
          exact={true}
          render={props => <LazySingleGalleryPage {...props}/>}
        />
        <Route
          path="/"
          render={props => <LazyLandingPage {...props}/>}
          />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
