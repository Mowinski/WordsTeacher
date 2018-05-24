export const category = (state = {categories: {}, isCreating: false, isCreatedNewCategory: false}, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_SUCCESS':
            return Object.assign({}, state, {categories: action.categories});

        case 'SET_CREATING_STATE':
            return Object.assign({}, state, {isCreating: action.isCreating});

        case 'SHOW_CATEGORY_ADDED':
            return Object.assign({}, state, {isCreatedNewCategory: true});

        case 'HIDE_CATEGORY_ADDED':
            return Object.assign({}, state, {isCreatedNewCategory: false});

        default:
            return state;
    }
}
