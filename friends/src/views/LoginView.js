import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import Login from '../components/Login';


class LoginView extends React.Component {

    login = creds => {
            this.props.login(creds)
            .then(res => {
                if (res) {
                    this.props.history.push('/friends')
                }
            })
        }

    render() {
        console.log(this.props.loggingIn)
        return (
            <div className='login'>
                <Login error={this.props.error} login={this.props.loggingIn} logon={this.login} />
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