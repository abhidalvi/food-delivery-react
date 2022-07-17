import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components'
import { selectUser } from '../features/user/userSlice';


function AboutUs() {

    const user = useSelector(selectUser);
    return (
        <>

            {!user && <Navigate to='/login' />}
            <ProfileCard>
                {/* <img src={profile} alt="" /> */}
                <h2>Abhishek Dalvi</h2>
                <h3>
                    📱 8828763406• ✉ adalvi2588@gmail.com
                </h3>
                <h4>
                    linkedin.com/in/dalvi-abhishek
                </h4>
            </ProfileCard>
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



export default AboutUs