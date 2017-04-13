/**
 * Created by andrew on 11.04.17.
 */

import {PASSWORD_ENTERED, LOG_IN_EMAIL_ENTERED } from '../actions/types'


const initialState = {
    email:'',
    password:''
};

function main(state: State = initialState, action: Action) {
    switch (action.type) {

        case LOG_IN_EMAIL_ENTERED :
            return Object.assign({}, state, {
                email: action.email
            });
        case PASSWORD_ENTERED :
            return Object.assign({}, state, {
                password: action.password
            });
        default:
            return state
    }
}

module.exports = main;