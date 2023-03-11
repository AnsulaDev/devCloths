import ProductCard from '../../components/product-card/product-card.component';
import {useState, useEffect ,Fragment} from 'react';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';



import {Title, CategoryContainer} from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    

    useEffect(() => {
        setProducts(categoriesMap[category]);

    }, [category, categoriesMap])  //our products wont update unless our category and categoryMap change

    return(
        <Fragment>
        <Title>{category.toUpperCase()}</Title>
        {isLoading ? (
            <Spinner />
        ) : (
        <CategoryContainer>
            {products &&
                products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
        )}
        </Fragment>
    );
};


export default Category;