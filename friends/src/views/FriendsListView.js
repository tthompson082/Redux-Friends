import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import FriendsList from '../components/FriendsList';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        console.log(this.props.friends)
        return (
            <div className='friends-list'>
                <FriendsList friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getFriends }
) (FriendsListView);