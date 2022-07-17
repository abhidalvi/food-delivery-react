import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';


function OrderCard({ items }) {
    const user = useSelector(selectUser)
    return (
        <>
            {user &&
                <OuterCard>
                    <RightCard>
                        <h4>Order Id: #{items.id}</h4>
                        <h3>Delivered At: {user.address}</h3>
                        <Items>
                            {items.data.item_ids &&
                                items.data.item_ids.map((item) => {
                                    return (
                                        <>
                                            <h4> {item.name}<span> x </span>{item.quantity} ∙ </h4>
                                        </>

                                    )

                                })
                            }
                        </Items>
                    </RightCard>
                    <LeftCard>
                        <h4>Delivered On: {new Date(items.time).toString()}</h4>
                        <h2>Total Paid: ₹{items.data.total_price}</h2>
                    </LeftCard>
                </OuterCard>
            }
        </>
    )
}

const OuterCard = styled.div`
padding:15px 10px 0px 15px;
margin:10px;
color:#2a2c41;
border-radius: 4px;
border:1px solid #2a2c41;
display: grid;
grid-template-columns: 1fr 1fr;
`;

const RightCard = styled.div`
display:flex;
flex-direction:column;
h4{
    font-size:15px;
}
h3{
    font-size:10px;
    color:gray;
}
`;
const Items = styled.div`
display:flex;
margin:10px 0px 10px 0px;
h4{
    font-size:13px;
}
`;

const LeftCard = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
h4{
    flex:0.9;
    font-size:10px;
    color:#2a2c41;
}
h2{
    color:#ff724c;
    font-size:18px;
}
`;

export default OrderCard