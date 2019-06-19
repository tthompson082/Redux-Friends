import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import Login from '../components/Login';


class LoginView extends React.Component {

    logon = e => {
        e.preventDefault();
        this.props.login();
    }

    render() {
        return (
            <div className='login'>
                <Login error={this.props.error} login={this.props.loggingIn} logon={this.props.logon} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.logginIn,
})

export default connect(
    mapStateToProps,
    { login }
) (LoginView);