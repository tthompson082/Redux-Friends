import React from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { addFriend } from '../actions/index';
import { connect } from 'react-redux';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    addAFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
        this.props.history.push('/friends')
    }

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <div className='col-4 mr-auto ml-auto mt-5'>
            <Card>
                <CardBody className='text-center'>
                    <CardTitle>
                        <h2>Add A Friend!</h2>
                    </CardTitle>
                </CardBody>
                <CardBody>
                    <Form onSubmit={this.addAFriend}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input onChange={this.handleChanges} required type='name' name='name' id='name' placeholder='Name' value={this.state.friend.name} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='age'>Age</Label>
                            <Input onChange={this.handleChanges} required type='age' name='age' id='age' placeholder='Age' value={this.state.friend.age} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input onChange={this.handleChanges} required type='email' name='email' id='email' placeholder='Email' value={this.state.friend.email} />
                        </FormGroup>
                        <FormGroup>
                            <Button color='primary' size='lg' className='float-right'>Add Friend</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error
})

export default connect(
    mapStateToProps,
    { addFriend }
    )(FriendForm);

// export default FriendForm;