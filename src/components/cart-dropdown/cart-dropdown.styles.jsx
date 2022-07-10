import styled from 'styled-components';
import Button from '../button/button.component'

export const CartDropdownContainer = styled.div`
  position: absolute; 
  width: 240px; 
  height: 340px; 
  display: flex; 
  flex-direction: column; 
  padding: 20px; 
  border: 1px solid black; 
  background-color: white; 
  top: 90px; 
  right: 40px; 
  z-index: 5;
`

export const EmptyMessage = styled.span`
  font-size: 18px; 
  margin: 50px auto; 
`

export const CartItems = styled.div`
  height: 240px; 
  display: flex; 
  flex-direction: column; 
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  } 

  &::-webkit-scrollbar-thumb {
    background-color: grey; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px; /* creates padding around scroll thumb */
    margin-left: 10px;
  }
`

export const CheckoutButton = styled(Button)`
  margin-top: auto;
`