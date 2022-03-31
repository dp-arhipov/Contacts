import React from 'react';
import './App.css';
import Contacts from './pages/Contacts';
import Login from './pages/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RequireAuth from './RequireAuth';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Contacts />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
