import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import  './product-card.styles.scss';
import Button,{BUTTON_TYPE_CLASS}  from '../button/button.component';

const ProductCard = ({product}) => {
    const { name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${ name } `}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart} >Add to Card</Button>
        </div>
    );
};



export default ProductCard;