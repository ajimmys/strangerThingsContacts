import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import App from './App';
import Home from './Home';
import Notfound from './NotFound';

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/addContact" element={<App />} />
      <Route element={Notfound} />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);