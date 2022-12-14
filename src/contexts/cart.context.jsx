import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    //find if cartItems contains productToAdd
    const existingCartItem =cartItems.find((cartItem) => 
        cartItem.id === productToAdd.id
    );

    // if found, increment quanity
    if(existingCartItem){
        return  cartItems.map((cartItem) => 
                    cartItem.id === productToAdd.id ? 
                    {...cartItem, quantity: cartItem.quantity + 1} 
                    : cartItem
                );
        
    }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    //fing the cart item to remove
    const existingCartItem =cartItems.find((cartItem) => 
        cartItem.id === cartItemToRemove.id
    );

    //check if quantity id equal to 1, if it is remove that item from the cart

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    //return back cartitems with matching cart item which reduced quantity
    return  cartItems.map((cartItem) => 
                    cartItem.id === cartItemToRemove.id ? 
                    {...cartItem, quantity: cartItem.quantity - 1} 
                    : cartItem
                );
}
////////////to remove items from cart
const removeItem = (cartItems, itemToRemove) => cartItems.filter((cartItem => cartItem.id !== itemToRemove.id));
    




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () =>{},
    removeItemToCart: () => {},
    removeAllItem: () => {},
    cartCount: 0
});

export const CartProvider = ({ children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCardCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
        setCardCount(newCartCount);
    }, [cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));

    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));

    }
    const removeAllItem= (itemToRemove) => {
        setCartItems(removeItem(cartItems, itemToRemove));

    }




    const value = { 
        isCartOpen, 
        setIsCartOpen,
        addItemToCart,
        removeItemToCart,
        removeAllItem,
        cartItems,
        cartCount};

    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}

