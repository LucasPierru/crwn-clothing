import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import PaymentForm from '../../components/payment-form/payment-form.component.jsx';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  
  const total = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return(
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        );
      })}
      <Total>Total: ${total}</Total>
      <PaymentForm/>
    </CheckoutContainer>
  )
}

export default Checkout;