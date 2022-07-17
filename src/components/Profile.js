import React, { useEffect } from 'react'
import { db } from '../firebase';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../features/user/userSlice';
import { Navigate } from 'react-router-dom';
import profile from '../images/profile.png'


function Profile() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    // console.log(user)
    return (
        <>
            {!user && <Navigate to='/login' />}
            {user &&
                <ProfileCard>
                    <img src={profile} alt="" />
                    <h2>{user.displayName}</h2>
                    <h3>
                        {user.phoneNumber} • {user.email}
                    </h3>
                    <h4>
                        {user.address}
                    </h4>
                </ProfileCard>

            }


        </>
    )
}

const ProfileCard = styled.div`
display:flex;
flex-direction:column;
margin:70px 50px 0 50px;
padding:30px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;  

img{
    width: 100%;
    height:200px;
    object-fit: contain;
}
h2{
    font-size:30px;
    color: #2a2c41
}
h3{
    font-size:20px;
    color: #2a2c41
}
`;

export default Profile