import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = cartItem;

  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow className='arrow' onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => deleteItemFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;