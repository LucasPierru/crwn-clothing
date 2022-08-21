import { 
  CheckoutItemContainer, 
  ImageContainer, 
  Image, 
  Name, 
  Quantity, 
  Price, 
  Arrow, 
  Value, 
  RemoveButton 
} from './checkout-item.styles.jsx'

import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../../store/cart/cart.action.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);

  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow className='arrow' onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => dispatch(deleteItemFromCart(cartItems, cartItem))}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;