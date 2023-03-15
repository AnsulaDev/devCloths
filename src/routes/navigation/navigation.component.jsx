import { Fragment} from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as Dev } from '../../assets/dev.svg';
import { signOutStart } from "../../store/user/user.action";
import { useSelector , useDispatch} from "react-redux";
import {selectorCurrentUser} from '../../store/user/user.selector';
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
        } from './navigation.styles';
const Navigation = () => {

    const currentUser = useSelector(selectorCurrentUser);  /* to access user reducer use state.user  */
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart());
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer  to="/">
                    <Dev className="log" />
                </LogoContainer>
                
                <NavLinks NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={ signOutUser }> SIGN OUT </NavLink>)
                            :( <NavLink to='/auth'>
                                    SIGN IN
                                </NavLink>
                                )}

                    <CartIcon/>
                </NavLinks>
                
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;