import { Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';
import {fetchCategoriesAsync} from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

import './shop.styles.scss';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchCategoriesAsync());
        
    }, []);


    return (
        <Routes>
            <Route index element ={ <CategoriesPreview/>}/>
            <Route path=":category" element ={ <Category/>}/>
        </Routes>
    

    );
};
export default Shop;