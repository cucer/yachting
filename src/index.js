import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './assets/scss/material-kit-react.scss?v=1.9.0';
import DashApp from './dashApp';

// ReactDOM.render(<DashApp />, document.getElementById("root"));

ReactDOM.render(
  <HashRouter>
    <DashApp />
  </HashRouter>,
  document.getElementById('root')
);
