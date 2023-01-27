import { LOGIN_USER } from "./userTypes"

const initialState = {
    userData: JSON.parse(localStorage.getItem('user')) || null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: return {
            ...state,
            userData: action.payload
        }
        default: return state
    }
}

export default userReducer