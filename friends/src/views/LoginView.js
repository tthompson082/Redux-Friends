import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Alert } from 'reactstrap';

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
                {(this.props.error) && <div className='col-4 mr-auto ml-auto'><Alert color='danger'>Incorrect Username or Password</Alert></div>}
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