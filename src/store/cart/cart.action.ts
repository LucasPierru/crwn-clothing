import { CategoryItem } from "../categories/category.types";
import { CART_ACTIONS_TYPES, CartItem } from "./cart.types";
import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[] , cartItemToRemove: CartItem): CartItem[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if(existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  
  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTIONS_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => 
  createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => 
  createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems)
)

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
}

export const deleteItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  return setCartItems(newCartItems);
}