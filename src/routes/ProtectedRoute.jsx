import React from 'react';
import {   Route } from 'react-router-dom';
import { useHistory } from 'react-router';

const ProtectedRoute = ({ isAuth:Auth, component: Component, match, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth) {
          return <Component {...props} />;
        } else {
          history.push('/login');
          history.go();
        }
      }}
    />
  );
};

export default ProtectedRoute;
