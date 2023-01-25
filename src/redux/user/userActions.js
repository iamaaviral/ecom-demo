import { LOGIN_USER } from "./userTypes"

export const setUserInfo = (userData) => {
    return {
        type: LOGIN_USER,
        payload: userData
    }
}