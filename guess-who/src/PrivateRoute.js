import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem("token") ? (
         <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }}
    />
);