import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';


const CheckoutItem  = ({cartItem}) => {
    const {removeAllItem, addItemToCart, removeItemToCart} = useContext(CartContext);

    const {name, imageUrl, price, quantity} = cartItem;
    const itemRemover =() => removeAllItem(cartItem);
    const incrementItems =() => addItemToCart(cartItem);
    const decrementItems =() => removeItemToCart(cartItem);
    return(
        <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={decrementItems}>
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={incrementItems}>
            &#10095;
            </div>
            </span>
        <span className='price'> {price}</span>
        <div  className='remove-button' onClick={itemRemover}> &#10005;</div>

        </div>
    );

}

export default CheckoutItem;