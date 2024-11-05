import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import AppRouter from './components/router/AppRouter';
import Navbar from './components/context/NavBar';
import { logout } from './redux/reducers/authReducer';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
};

export default App;