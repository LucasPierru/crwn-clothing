import { ProductCardContainer, AddToCart, Image, Footer, Name, Price } from'./product-card.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart  } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

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