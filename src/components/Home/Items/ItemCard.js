import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../features/cart/cartSlice';

function ItemCard({ items }) {

  const dispatch = useDispatch();

  return (
    <Card>
      <ProdImage>
        <img src={items.display_img} alt="" />
      </ProdImage>

      <ProductInfo>
        <h2>{items.name}</h2>
        <h3>₹{items.price}</h3>
        <h4>{items.Quantity_desc}</h4>
      </ProductInfo>

      <CartBtn>
        <button onClick={() => { dispatch(addToCart(items)) }}>ADD TO CART</button>
      </CartBtn>

    </Card>
  )
}


const Card = styled.div`
border-radius: 10px;
box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
display: grid;
grid-template-rows: 2fr 0.7fr 0.3fr;
overflow:hidden;
`;

const ProdImage = styled.div`
background-color:#2a2c41;
justify-content:center;

img {
  inset: 0px;
  display: block;
  object-fit: cover;
  opacity: 1;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
  z-index: 1;
  top: 0; 
}
`;


const ProductInfo = styled.div`
padding:10px 10px 5px 10px;
border-bottom: 1px solid #2a2c41;
h2{
  color:#2a2c41;
  font-size: 20px;
}

h3{
  color: #f8901c;
  font-size: 16px;
}
h4{
  color:#2a2c41;
  font-size:12px;
}
`;

const CartBtn = styled.div`
padding:10px 0 20px 20px;
button{
  width:120px;
  height: 36px;
  font-size: 11px;
  padding:10px 10px 12px 12px;
  background-color:#2a2c41;
  color:#f4f4f8;
  border-radius:5px;
  font-weight:600;
  text-transform:uppercase;
  &:hover{
   opacity:0.9;
   cursor:pointer;
  }
}
`;
export default ItemCard