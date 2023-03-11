import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
    [selectCategoryReducer],  //if categories value doesnt changed then it going to be same

    (categoriesSlice) => categoriesSlice.categories
);
export const selectCategoriesMap =  createSelector(
    [selectCategories], //memoized
    (categories)=>categories  
    .reduce((acc, catergory) => { //we dont wanna reduce if categoreis doesnt changed
    const {title, items} = catergory
    acc[title.toLowerCase()] = items;
    return acc;
}, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);