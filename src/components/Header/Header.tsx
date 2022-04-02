import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import useAuth from '../../hooks/useAuth';

export default function MenuAppBar() {
  const {logout} = useAuth();
  const handleLogOut = () => {
    logout();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Contacts
        </Typography>

        <IconButton size="large" onClick={handleLogOut} color="inherit">
          <LogoutRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
