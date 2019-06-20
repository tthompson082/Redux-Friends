import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (localStorage.getItem('token')) {
                console.log('from Private Route')
            return <Component {...props} />;
            }
            return <Redirect to="/login" />;
        }}
        />
    );
};

export default PrivateRoute;