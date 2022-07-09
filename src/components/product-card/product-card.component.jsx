import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cart, setCart } = useContext(CartContext)

  const handleAddToCart = () => {
    console.log(cart.indexOf(product))
    if (cart.indexOf(product) === -1) { 
      setCart(cart => [...cart, { product, quantity: 1 }])
    }
    else {
      setCart(cart => cart[cart.indexOf(product)].quantity + 1)
    }
    console.log(cart)
  }

  return(
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={handleAddToCart} buttonType='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard;