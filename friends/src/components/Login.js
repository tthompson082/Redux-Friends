import React from 'react';
import { Spinner, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button} from 'reactstrap';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    loggingIn = e => {
        e.preventDefault();
        this.props.logon(this.state.credentials)
    }

    render() {
        console.log(this.props.login)
        return (
            <div className='col-4 mr-auto ml-auto mt-5'>
                <Card>
                    <CardBody className='text-center'>
                        <CardTitle>
                            <h2>Login</h2>
                        </CardTitle>
                    </CardBody>
                    <CardBody>
                        <Form onSubmit={this.loggingIn}>
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input onChange={this.handleChanges} required type='username' name='username' id='username' placeholder='Username' value={this.state.credentials.username} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input onChange={this.handleChanges} required type='password' name='password' id='password' placeholder='Password' value={this.state.credentials.password} />
                            </FormGroup>
                            <FormGroup className='float-right'>
                                {(this.props.login) ? <Spinner size='lg' color='primary' /> : <Button color='primary' size='lg'>Login</Button>}
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Login;