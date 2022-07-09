import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
  // If not found add the product to cart
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
      {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem);
  }
  // return new array with modified cartItems/new cartItems
  return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  
  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect (() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  },[cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const deleteItemFromCart = (cartItemToRemove) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id))
  }

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart, 
    cartCount, 
    removeItemFromCart, 
    deleteItemFromCart 
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}