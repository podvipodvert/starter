/**
 * Created by andrew on 13.04.17.
 */
import {
    LOG_IN_EMAIL_ENTERED,
    PASSWORD_ENTERED
} from './types'
export function emailEntered(email) {
    return (dispatch) => {
        return dispatch({
            type:LOG_IN_EMAIL_ENTERED,
            email
        })
    }
}

export function passwordEntered(password) {
    return (dispatch) => {
        return dispatch({
            type:PASSWORD_ENTERED,
            password
        })
    }
}