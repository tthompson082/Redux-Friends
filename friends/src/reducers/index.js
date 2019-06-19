import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
    token: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                erorr: null,
                loggingIn: true
            }
            case LOGIN_SUCCESS:
                console.log(action.payload)
                return {
                    ...state,
                    loggingIn: false,
                    token: action.payload
                }
            case LOGIN_FAILED:
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
    }
}

export default reducer;