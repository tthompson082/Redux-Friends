import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import Login from '../components/Login';


class LoginView extends React.Component {

    render() {
        console.log(this.props.loggingIn)
        return (
            <div className='login'>
                <Login error={this.props.error} login={this.props.loggingIn} logon={this.props.login} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn,
})

export default connect(
    mapStateToProps,
    { login }
) (LoginView);