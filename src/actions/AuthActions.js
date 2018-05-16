import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text,
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER });

        firebase.auth().signOut()
            .then(user => logoutUserSuccess(dispatch, null));
    };

    console.log("PASSOU POR AQUI");
};

const logoutUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGOUT_USER,
        payload: null
    });
}; 

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });  
};