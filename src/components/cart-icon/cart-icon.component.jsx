import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIscartOpen = () => setIsCartOpen(!isCartOpen)

  return(
    <CartIconContainer onClick={toggleIscartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;