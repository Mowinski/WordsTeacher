export const category = (state = {categories: {}, isCreating: false}, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_SUCCESS':
            return Object.assign({}, state, {categories: action.categories});

        case 'SET_CREATING_STATE':
            return Object.assign({}, state, {isCreating: action.isCreating});

        default:
            return state;
    }
}
