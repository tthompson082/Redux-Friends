import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import FriendsList from '../components/FriendsList';
import { Spinner } from 'reactstrap';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        console.log(this.props.friends)
        return (
            <div className='friends-list'>
                {(this.props.fetchingFriends) && 
                    <div className='mt-5 text-center'>
                        <Spinner color='info' size='lg' />
                    </div>}
                <FriendsList friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    error: state.error,
    fetchingFriends: state.fetchingFriends
})

export default connect(
    mapStateToProps,
    { getFriends }
) (FriendsListView);