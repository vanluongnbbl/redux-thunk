import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER,
    EDIT_USER,
    DELETE_USER
} from './userTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    let newUsers = [...state.users]

    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,   
        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }
        case ADD_USER: 
            newUsers.push(action.payload)
            return {
                ...state,
                users: newUsers
            }
        case DELETE_USER: 
            newUsers.splice(action.payload, 1)
            return {
                ...state,
                users: newUsers
            }
        case EDIT_USER: 
            newUsers[action.index] = action.payload
            return {
                ...state,
                users: newUsers
            }
        default: return state
    }   
}

export default userReducer