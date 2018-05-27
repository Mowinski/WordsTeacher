import firebase from '../firebase';


export const userLogged = (user) => ({
    type: 'USER_LOGGED_SUCCESSFULY',
    user,
});

export const userLogout = () => ({
    type: 'USER_LOGOUT'
});


export const logout = () => (dispatch) => {
    firebase.auth().signOut()
        .then(() => dispatch(userLogout()));
};

export const login = (email, password, errBack=() => {}) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(authUser => dispatch(userLogged(authUser)))
        .catch(errBack);
};


export const checkUserState = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
            dispatch(userLogged(authUser));
        } else {
            dispatch(logout);
        }
    });
}
