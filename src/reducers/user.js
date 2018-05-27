export const user = (state = {isLogged: false, currentUser: {}}, action) => {
    switch (action.type) {
        case 'USER_LOGGED_SUCCESSFULY':
            return Object.assign({}, state, {currentUser: action.user, isLogged: true});

        case 'USER_LOGOUT':
            return Object.assign({}, state, {currentUser: {}, isLogged: false});

        default:
            return state;
    }
}
