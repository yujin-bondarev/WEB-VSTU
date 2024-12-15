import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Application
        </Typography>
        {isLoggedIn ? (
          <>
            <Link to="/racers" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Racers Table</Button>
            </Link>
            <Link to="/racers/cards" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Racers Cards</Button>
            </Link>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;