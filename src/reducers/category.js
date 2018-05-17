export const category = (state = [], action) => {
    switch (action.type) {
        case 'CATEGORY_ADDED_SUCESS':
            return state.concat([action.category]);
        case 'FETCH_CATEGORY_SUCCESS':
            return [
                ...action.categories
            ];
        default:
            return state;
    }
}
