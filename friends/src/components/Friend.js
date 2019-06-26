import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Friend = props => {
    return (
        <div className='mb-3 ml-auto mr-auto mt-4 col-5'>
            <Card inverse color='info'>
                <CardBody>
                    <CardTitle><h3>{props.name}</h3></CardTitle>
                    <CardSubtitle>{props.age}</CardSubtitle>
                    <CardText>{props.email}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Friend;