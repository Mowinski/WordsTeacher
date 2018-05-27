import { auth } from '../firebase';


export const userLogged = (user) => ({
    type: 'USER_LOGGED_SUCCESSFULY',
    user,
});

export const userLogout = () => ({
    type: 'USER_LOGOUT'
});


export const logout = () => (dispatch) => {
    auth.signOut()
        .then(() => dispatch(userLogout()));
};

export const login = (email, password) => (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(authUser => {
            dispatch(userLogged(authUser));
        })
        .catch(error => {
            console.log('Error', error)
        });
};


export const checkUserState = () => (dispatch) => {
    auth.onAuthStateChanged(authUser => {
        if (authUser) {
            dispatch(userLogged(authUser));
        } else {
            dispatch(logout);
        }
    });
}
