import React, {Fragment} from 'react';
import './App.css';
import Contacts from './pages/Contacts';
import Login from './pages/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RequireAuth from './RequireAuth';
import NotFound from './pages/NotFound';
import useAuth from './hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import CenterXY from './components/CenterXY';
const LocalAuth: React.FC = ({children}) => {
  const {isLocalCheckFinished} = useAuth();
  return (
    <Fragment>
      {isLocalCheckFinished === true ? (
        <Fragment>{children}</Fragment>
      ) : (
        <CenterXY>
          <CircularProgress />
        </CenterXY>
      )}
    </Fragment>
  );
};

function App() {
  return (
    <LocalAuth>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Contacts />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LocalAuth>
  );
}

export default App;
