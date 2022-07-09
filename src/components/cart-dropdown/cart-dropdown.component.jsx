import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartDropdown = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cart?.map((item) => {
          return(
            <div key={item.id}>
              <span>
                {item.name}
              </span>  
            </div>  
          )
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown