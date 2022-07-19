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
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LogoutIcon from '@mui/icons-material/Logout';

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
        <MenuItem component={Link} to={'/'}>
          <span><HomeIcon /></span>
          <h2>Home</h2>
        </MenuItem>
        <MenuItem component={Link} to={'/AboutUs'}>
          <span><ContactMailIcon /></span>
          <h2>About Us</h2>
        </MenuItem>
        <MenuItem component={Link} to={'/profile'}>
          <span><PersonIcon /></span>
          <h2>Profile</h2>
        </MenuItem>
        <MenuItem component={Link} to={'/orders'}>
          <span><HistoryEduIcon /></span>
          <h2>Orders</h2>
        </MenuItem>
        <MenuItem onClick={LogOut}>
          <span><LogoutIcon /></span>
          <h2>Log Out</h2>
        </MenuItem>
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
  z-index: 3;

  @media (max-width: 710px) {
    padding: 0px;
    padding-right:12px;
  }
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

  @media (max-width: 710px) {
    display:none;
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
  span{
    display:flex;
    flex-direction:column;

    h5{
      font-size:10px;
    }
  }
  

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
 

    @media (min-width: 700px) {
      span{
        display:none;
      }
    }
    @media (max-width: 710px) {
      margin-left:3px;
      h2{
        display:none;
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
  right: -10px;
  top: -4px;
  

  p{
    font-weight: 500;
    color:#f4f4f8;
    margin-bottom:3px;
  }
}


`;
export default Header