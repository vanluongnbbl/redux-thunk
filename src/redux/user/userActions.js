import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER,
    EDIT_USER,
    DELETE_USER
} from './userTypes'

export const fetchUserRequest = (payload) => {
    return {
        type: FETCH_USERS_REQUEST,
        payload
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}

export const editUser = (payload, index) => {
    return {
        type: EDIT_USER,
        payload,
        index
    }
}

export const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }   
}