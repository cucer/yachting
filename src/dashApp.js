import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main/Main";
import NotFoundPage from "./pages/Main/NotFoundPage";
import Boats from "./pages/Boats/Boats";
import BoatDetails from "./pages/Boats/BoatDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Voyage from "./pages/Voyage/Voyage";

var hist = createBrowserHistory();

const DashApp = () => {
  return (
    <Wrapper>
      <Router history={hist}>
        <Switch>
          <Route
            path='/404'
            component={(props) => <NotFoundPage {...props} />}
            exact
          />
          <Route
            path='/boats'
            component={(props) => <Boats {...props} />}
            exact
          />
          <Route
            path='/boats/:id'
            component={(props) => <BoatDetails {...props} />}
            exact
          />
          <Route
            path='/voyage'
            component={(props) => <Voyage {...props} />}
            exact
          />
          <Route
            path='/about'
            component={(props) => <About {...props} />}
            exact
          />
          <Route
            path='/contact'
            component={(props) => <Contact {...props} />}
            exact
          />
          <Route path='/' component={(props) => <Main {...props} />} exact />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default DashApp;
