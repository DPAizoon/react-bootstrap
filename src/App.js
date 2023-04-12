import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Dashboard from  './components/Dashboard'
import Preferences  from  './components/Preferences'
import Login from './components/login/Login';
import useToken from './components/useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login setToken={setToken} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
    
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />}> </Route>
          <Route path="/dashboard" element={<Dashboard />}> </Route>
          <Route path="/preferences" element={<Preferences />}> </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
