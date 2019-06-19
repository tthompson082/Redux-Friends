import React from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button} from 'reactstrap';


const Login = props => {
    return (
        <div className='col-4 mr-auto ml-auto mt-5'>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>Login</h2>
                    </CardTitle>
                </CardBody>
                <CardBody>
                    <Form onSubmit={props.logon}>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input required type='username' name='username' id='username' placehodler='username'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input required type='password' name='password' id='password' placeholder='password' />
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

export default Login;