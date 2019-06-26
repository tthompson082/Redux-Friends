import React from 'react';
import Friend from './Friend';

class FriendsList extends React.Component {
    render() {
        return (
            <div className='row'>
                {this.props.friends.map(friend => {
                    return (
                        <Friend
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                            key={friend.id}
                        />
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;