import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default ({ component: Component, ...rest }) => {

  return (
    <Consumer>
      { (context) => {
        return (
        <Route
          {...rest}
          render={

            props => {
              return (

              context.authenticatedUser ? 
                <Component {...props} />
              : 
                <Redirect to={{
                  pathname: '/forbidden',
                  from: props.location,
                }} />
              )
            }
          }
        />
      )}}
    </Consumer>
  );
};