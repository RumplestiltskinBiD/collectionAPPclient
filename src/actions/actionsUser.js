import axios from "axios";
import {deleteUserAction, setUser, setUsers} from "../reducers/userReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/registration", {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/auth",
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
                )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export function getAllUsers() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`http://localhost:5000/api/users`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setUsers(response.data))
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function deleteUser(user) {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/users?id=${user._id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(deleteUserAction(user._id))
            alert(response.data.message)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}