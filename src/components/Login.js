import React, { useState } from 'react'
import { login, selectUser } from '../features/user/userSlice';
import { auth, db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png'
import { toggleSignIn } from '../features/ui/uiSlice'


function Login() {

    const [loginemail, setloginEmail] = useState("");
    const [loginpassword, setloginPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    const LogIn = () => {
        if (!loginemail) {
            return alert('pls enter email id and password')
        }
        else if (!loginpassword) {
            return alert('pls enter email id and password')
        }
        auth.signInWithEmailAndPassword(loginemail, loginpassword)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                }))
                setloginEmail("");
                setloginPassword("");
                return (
                    <Navigate to='/home' />
                )

            }).catch((error) => alert(error));

    }


    const SignInClick = () => {
        dispatch(toggleSignIn());
    }

    return (

        <>
            {user && <Navigate to='/home' />}

            <Nav>
                <Logo>
                    <img src={logo} alt="React Delivery" />
                </Logo>
                <Button style={{
                    borderRadius: 10,
                    backgroundColor: "#2a2c41",
                    padding: "15px 30px",
                    fontSize: "15px",
                    color: "#f4f4f8"
                }}
                    onClick={SignInClick}>
                    Sign In
                </Button>
            </Nav>
            <Rest>
                <LeftSide>
                    <h2>Login</h2>
                    <input
                        placeholder='email'
                        type="email"
                        value={loginemail}
                        onChange={e => setloginEmail(e.target.value)} />

                    <input
                        placeholder='password'
                        type="password"
                        value={loginpassword}
                        onChange={e => setloginPassword(e.target.value)} />

                    <button
                        onClick={LogIn}>Login</button>
                    <h4>
                        By clicking on Login, I accept the <span style={{ color: '#3e54de' }}>Terms & Conditions</span> & <span style={{ color: '#3e54de' }}>Privacy Policy</span>
                    </h4>
                </LeftSide>

            </Rest>


        </>

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

const Button = styled.button`
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                        &:hover{
                            cursor:pointer;
                            opacity:0.9;
                        }`;
const Rest = styled.div`
                        display:flex;
                        height:90vh;
                        img{
                            object-fit:contain;
                            height:250px;
                            width:250px;
                            margin:50px 20px 30px 90px;
                            }
                        `;

const LeftSide = styled.div`
                        display:flex;
                        flex-direction:column;
                        width:30%;
                        min-width:300px;
                        padding:35px;
                        margin:100px 300px 200px 50px;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                                                
                        h2{
                        font-size: 30px; 
                        color:#2a2c41;
                        }
                                                
                        input{
                        width:100%;
                        height: 50px;
                        font-size: 20px;
                        padding:15px;
                        margin-top:10px;
                        border-radius: 5px;
                        color:#2a2c41; 
                        }
                        
                        button{
                        width:100%;
                        height:50px;
                        padding:15px;
                        margin-top:10px;
                        font-size: 20px;
                        border-radius: 5px;
                        background-color:#2a2c41;
                        text-align:center;
                        color:#f4f4f8;
                        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                        &:hover{
                         opacity:0.9;
                         cursor:pointer;
                        }
                        }
                        
                         h4{
                        margin-top:10px;
                        font-size:15px;
                        }
                        `;


export default Login