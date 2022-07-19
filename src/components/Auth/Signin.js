import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignIn } from '../../features/ui/uiSlice'
import { login } from '../../features/user/userSlice';
import { auth, db } from '../../firebase';
import './Signin.css'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.png'

function Signin() {

    const [name, setName] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [address, setAddress] = useState("");

    const ui = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const SignIn = () => {
        //add error scenarios
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                        }));
                        db.collection('users').add({
                            userid: userAuth.user.uid,
                            address: address,
                            phoneNumber: phoneno,
                        })
                        setName("");
                        setPhoneno("");
                        setEmail("");
                        setPassword("");
                        setAddress("");
                        dispatch(toggleSignIn());
                        return (
                            <Navigate to='/home' />
                        )
                    });
            }).catch((error) => alert(error));
    }
    return (
        <>
            <div
                className={ui.signInDrawerVisible ? 'signInContainer' : 'signInContainer__transform'}>
                <Container>
                    <h2>SignUp</h2>
                    <input
                        placeholder='Name'
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        placeholder='Phone No.'
                        type="text"
                        value={phoneno}
                        onChange={e => setPhoneno(e.target.value)} />
                    <input
                        placeholder='Address'
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)} />
                    <input
                        placeholder='Email id'
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button
                        onClick={SignIn}>Continue</button>

                </Container>
                <ImgContainer>
                    <img src={logo} alt="" />
                </ImgContainer>

            </div>

            {
                ui.signInDrawerVisible && (
                    <div className="Mask"
                        onClick={() => {
                            dispatch(toggleSignIn());
                        }}
                    />
                )
            }
        </>
    )
}


const Container = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
justify-content:center;
width: 80%;
h2{
    font-size: 30px; 
    color:#2a2c41; 
}

input{
    width:300px;
    height: 50px;
    font-size: 20px;
    padding:15px;
    margin-top:10px;
    border-radius: 5px;
    color:#2a2c41;
}

button{
    width:300px;
    height: 50px;
    margin-top:10px;
    font-size: 20px;
    border-radius: 5px;
    background-color:#2a2c41;
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

@media (max-width: 768px) {
    input{
        width:100%;
    }

    button{
        width:100%;
    }
}



`;

const ImgContainer = styled.div`
@media (max-width: 1199px) {
    img{
        display:none;
    }
}
@media (min-width: 1200px) {
    img{
        height:100%;
        width:100%;
        object-fit:contain;
    }
}

`;
export default Signin