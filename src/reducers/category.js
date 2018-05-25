export const category = (state = {categories: {}}, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_SUCCESS':
            return Object.assign({}, state, {categories: action.categories});

        default:
            return state;
    }
}
