const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SET_USERS = "SET_USERS"
const DELETE_USER = "DELETE_USER"

const defaultState = {
    users: [],
    currentUser: {},
    isAuth: false

}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case SET_USERS: return {...state, users: action.payload}
        case DELETE_USER: return {...state, users: [...state.users.filter(user => user._id !== action.payload)]}
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const setUsers = users => ({type: SET_USERS, payload: users})
export const deleteUserAction = (userId) => ({type: DELETE_USER, payload: userId})