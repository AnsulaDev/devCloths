export const selectCategoriesMap = (state) => {
    console.log('selector fired');
    return state.categories.categories
        .reduce((acc, catergory) => {
        const {title, items} = catergory
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
}