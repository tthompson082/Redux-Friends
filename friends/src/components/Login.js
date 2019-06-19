import React from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button} from 'reactstrap';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    loggingIn = e => {
        e.preventDefault();
        this.props.logon();
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='col-4 mr-auto ml-auto mt-5'>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2>Login</h2>
                        </CardTitle>
                    </CardBody>
                    <CardBody>
                        <Form onSubmit={this.loggingIn}>
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input onChange={this.handleChanges} required type='username' name='username' id='username' placehodler='username' value={this.state.username} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input onChange={this.handleChanges} required type='password' name='password' id='password' placeholder='password' value={this.state.password} />
                            </FormGroup>
                            <FormGroup>
                                <Button color='primary' size='lg'>Login</Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Login;