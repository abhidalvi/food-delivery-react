import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components'
import { getOrders, setOrder } from '../../features/orders/orderSlice';
import { selectUser } from '../../features/user/userSlice';
import { db } from '../../firebase';
import OrderCard from './OrderCard';

function Orders() {
    const user = useSelector(selectUser)
    let orders = [];
    const dispatch = useDispatch();
    useEffect(() => {
        user &&
            db.collection("orders")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    snapshot.docs.map(doc => {
                        if (doc.data().uid === user.uid) {
                            const timestamp = doc.data() && doc.data().timestamp && doc.data().timestamp.toDate()
                            orders = [...orders, { id: doc.id, data: doc.data(), time: timestamp }];
                            console.log(doc.data())
                        }
                    });
                    dispatch(setOrder({
                        orders: orders
                    }))
                })
    }, [user])

    const OrderUser = useSelector(getOrders);
    return (
        <>
            {!user && <Navigate to='/login' />}
            <Heading>My Orders</Heading>
            <ul>
                {OrderUser &&
                    OrderUser.map((data) => {
                        return (
                            <li key={data.id}>
                                <OrderCard
                                    items={data} />
                            </li>
                        )
                    })
                }
            </ul>

        </>

    )
}

const Heading = styled.h2`
font-size: 35px;
padding:20px;
`;



export default Orders