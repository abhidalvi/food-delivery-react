import React, { useEffect } from 'react'
import logo from '../../images/logo.png'
import './Header.css'
import { NavLink as Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { logout } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';
import { MenuItem } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { toggleCart } from '../../features/ui/uiSlice';


function Header() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const LogOut = () => {
    dispatch(logout());
    auth.signOut();
  }

  const cartClick = () => {
    dispatch(toggleCart());
  }

  useEffect(() => {

  }, [cart])

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="React Delivery" />
      </Logo>

      <NavMenu>
        <MenuItem component={Link} to={'/'}>Home</MenuItem>
        <MenuItem component={Link} to={'/AboutUs'}>About Us</MenuItem>
        <MenuItem component={Link} to={'/profile'}>Profile</MenuItem>
        <MenuItem component={Link} to={'/orders'}>Orders</MenuItem>
        <MenuItem onClick={LogOut}>Log Out</MenuItem>
      </NavMenu>


      <Cart onClick={cartClick}>


        {cart.length > 0 ? (
          <>
            <LocalMallOutlinedIcon />
            <div>
              <p>{cart.length}</p>
            </div>
          </>
        ) : (
          <LocalMallOutlinedIcon />
        )}
      </Cart>
    </Nav>


  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #ff724c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 55px;
  max-height: 50px;
  font-size: 0;
  display: inline-block;
  img {
    width: 100%;
    object-fit:cover;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 80px;
  
  Link{
    text-decoration:none;
  }
    
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Cart = styled.div`
position: relative;
display: flex;
  justify-content: center;
  align-items: center;

 
div{
  width: 20px;
  height: 20px;
  background: #2a2c41;
  border-radius: 100%;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -4px;
  

  p{
    font-weight: 500;
    color:#f4f4f8;
    margin-left:14px;
    margin-bottom:3px;
  }
}
`;
export default Header