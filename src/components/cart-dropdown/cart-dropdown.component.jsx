import { CartDropdownContainer, CartItems, EmptyMessage, CheckoutButton } from './cart-dropdown.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom'
 
import CartItem from '../cart-item/cart-item.component'
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length 
          ? cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>)) 
          : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
        
      </CartItems>
      <CheckoutButton onClick={goToCheckout}>GO TO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
  )
}

export default CartDropdown