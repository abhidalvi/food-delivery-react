import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login, selectUser } from '../../features/user/userSlice'
import Items from './Items/Items'
import ImgSlider from './ImageSlider/ImgSlider'
import Viewers from './Viewers'
import { db } from '../../firebase'

function Home() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const [value, setValue] = useState('all');
    const receivedItem = (value) => {
        if (value === 'fruits') {
            setValue('fruits')
        } else if (value === 'fish') {
            setValue('fish')
        } else if (value === 'chicken') {
            setValue('chicken')
        } else if (value === 'desserts') {
            setValue('desserts')
        }
    }
    useEffect(() => {
        console.log('hii')
        user &&
            (db.collection("users")
                .onSnapshot((snapshot) => {
                    snapshot.docs.map((doc) => {
                        if (doc.data().userid === user.uid) {
                            dispatch(login({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                address: doc.data().address,
                                phoneNumber: doc.data().phoneNumber,
                            }))

                        }
                    });

                })
            )
    }, [])

    return (
        <>
            {!user && <Navigate to='/login' />}
            <main>
                <ImgSlider />
                <Viewers showItems={receivedItem} />
                {/* to do here pass filter to item and make it filter */}
                <Items
                    value={value}
                />
            </main>
        </>

    )
}

export default Home