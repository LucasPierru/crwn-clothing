import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const signOutHandler = async() => {
    await signOutUser();
  }

	return (
		<Fragment>
			<div className="navigation">
        <Link className="logo-container" to='/'>
				  <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span onClick={signOutHandler} className="nav-link">SIGN OUT</span>)
              : (
              <Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
			</div>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;