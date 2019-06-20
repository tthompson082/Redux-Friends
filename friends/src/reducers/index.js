import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, FETCHING_DATA, FETCHING_FAILURE, FETCHING_SUCCESS, ADD_FRIEND, ADD_SUCCESS, ADD_FAILED } from '../actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
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
                }
            case LOGIN_FAILED:
                return {
                    ...state,
                    error: action.payload
                }
            case FETCHING_DATA:
                return {
                    ...state,
                    fetchingFriends: true,
                    error: '',
                }
            case FETCHING_SUCCESS:
                return {
                    ...state,
                    fetchingFriends: false,
                    friends: action.payload,
                    error: ''
                }
            case FETCHING_FAILURE:
                return {
                    ...state,
                    fetchingFriends: false,
                    error: action.payload
                }
            case ADD_FRIEND:
                return {
                    ...state,
                }
            case ADD_SUCCESS:
                return {
                    ...state,
                    friends: action.payload
                }
            case ADD_FAILED:
                return {
                    ...state,
                    error: action.payload
                }
            default:
                console.log(state)
                return state
    }
}

export default reducer;