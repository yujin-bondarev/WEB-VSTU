// NavBar.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const NavBar = ({ isLoggedIn, handleLogout, toggleShowTable, showTable }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {isLoggedIn && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
        {isLoggedIn && <Button color="inherit" onClick={toggleShowTable}>
          {showTable ? "Show Cards" : "Show Table"}
        </Button>}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;