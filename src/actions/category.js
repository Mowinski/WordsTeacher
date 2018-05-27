import firebase from '../firebase';

export const categoryFetched = (categories) => ({
    type: 'FETCH_CATEGORY_SUCCESS',
    categories,
});

export const categoryAdded = () => ({
    type: 'CATEGORY_ADDED',
});

export const fetchCategories = () => (dispatch) => {
    const categories = firebase.database().ref('/categories');
    categories.on(
        'value',
        categories => dispatch(categoryFetched(categories.val()))
    );
};

export const addCategory = (categoryName) => async (dispatch) => {
    firebase.database()
        .ref('/categories')
        .push()
        .set(categoryName);
};

export const deleteCategory = (categoryId) => (dispatch) => {
    firebase.database()
        .ref('/categories')
        .child(categoryId)
        .remove()
}
