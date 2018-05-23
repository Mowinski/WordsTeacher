import firebase from './firebase';

export const categoryFetched = (categories) => ({
    type: 'FETCH_CATEGORY_SUCCESS',
    categories,
});

export const categoryAdded = () => ({
    type: 'CATEGORY_ADDED',
});

export const setCreatingState = (isCreating) => ({
    type: 'SET_CREATING_STATE',
    isCreating
});

export const fetchCategories = () => (dispatch) => {
    const categories = firebase.database().ref('/categories');
    categories.on(
        'value',
        categories => dispatch(categoryFetched(categories.val()))
    );
};

export const addCategory = (categoryName) => (dispatch) => {
    dispatch(setCreatingState(true));
    firebase.database()
        .ref('/categories')
        .push()
        .set(categoryName)
        .then(() => dispatch(setCreatingState(false)));
}
