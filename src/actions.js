export const categoryFetched = (categories) => ({
    type: 'FETCH_CATEGORY_SUCCESS',
    categories,
});

export const categoryAdded = (category) => ({
    type: 'CATEGORY_ADDED_SUCESS',
    category,
});
