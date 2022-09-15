import { ProductCardContainer, AddToCart, Image, Footer, Name, Price } from'./product-card.styles.jsx'
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return(
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddToCart onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</AddToCart>
    </ProductCardContainer>
  )
}

export default ProductCard;