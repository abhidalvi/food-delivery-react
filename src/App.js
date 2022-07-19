import React, { Fragment, useEffect } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/user/userSlice';
import { useDispatch } from 'react-redux/es/exports';
import PrivateRoute from './PrivateRoute'
import Profile from './components/Profile';
import Signin from './components/Auth/Signin';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);


  return (
    <Fragment>
      <div className='app'>
        {user && <div className='app__header'>
          <Header />
        </div>}

        <div className='app__body'>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />} />

            <Route exact path='/home' element={<Home />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Aboutus' element={<AboutUs />} />
            <Route path='/profile' element={<Profile />} />

          </Routes>
          <Signin />
          <Cart />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
