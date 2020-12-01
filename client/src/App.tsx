
import React from 'react';
import Globalstyle from "./styles/globalstyles";
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import history from './config/history';

function App() {
  return (
    <>
      <Router history={history}>

        <Globalstyle />
        <Routes />

      </Router>
    </>
  );
}

export default App;