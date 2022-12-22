import { createContext, useState , useEffect} from "react";

import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

/* import SHOP_DATA from '../shop-data.js'; */

/* export const ProductsContext = createContext({
    products: [],
});
 */
export const CategoriesContext = createContext({
    categoriesMap: {},
});

/* export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]); */
    //if we want to  add data for the first time in our firestore db
  /*  useEffect(()=> {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []); */

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const  categoryMap = await getCategoriesAndDocuments('categories');
    
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};