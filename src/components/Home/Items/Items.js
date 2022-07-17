import React, { useEffect } from 'react'
import styled from 'styled-components';
import { selectAllData, selectChickenData, selectDessertsData } from '../../../features/items/itemsSlice';
import { selectFruitData } from '../../../features/items/itemsSlice';
import { selectFishData } from '../../../features/items/itemsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';

import { db } from '../../../firebase'
import { setItems } from '../../../features/items/itemsSlice'
import ItemCard from './ItemCard';


function Items(props) {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  let allData = [];
  let fruitData = [];
  let fishData = [];
  let chickenData = [];
  let dessertsData = [];
  useEffect(() => {
    db.collection("data")
      .onSnapshot((snapshot) => {
        snapshot.docs.map(doc => {
          allData = [...allData, { id: doc.id, ...doc.data() }];
          switch (doc.data().category) {
            case "fruits":
              fruitData = [...fruitData, { id: doc.id, ...doc.data() }];
              break;
            case "fish":
              fishData = [...fishData, { id: doc.id, ...doc.data() }];
              break;
            case "chicken":
              chickenData = [...chickenData, { id: doc.id, ...doc.data() }];
              break;
            case "desserts":
              dessertsData = [...dessertsData, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
        });
        dispatch(
          setItems({
            allData: allData,
            fruitData: fruitData,
            fishData: fishData,
            chickenData: chickenData,
            dessertsData: dessertsData,
          })
        )
      })

  }, [user])
  const allfilledData = useSelector(selectAllData);
  const fruitfilledData = useSelector(selectFruitData);
  const fishfilledData = useSelector(selectFishData);
  const chickenfilledData = useSelector(selectChickenData);
  const dessertsfilledData = useSelector(selectDessertsData);

  const displayData = () => {
    if (props.value === 'all') {
      return (
        <>
          {allfilledData && allfilledData.map((data) => {
            return (
              <ItemCard
                key={data.id}
                items={data} />
            )
          })}
        </>
      )
    } else if (props.value === 'fruits') {
      return (
        <>
          {fruitfilledData && fruitfilledData.map((fruit) => {
            return (
              <ItemCard
                key={fruit.id}
                items={fruit} />
            )
          })}
        </>
      )
    } else if (props.value === 'fish') {
      return (
        <>
          {fishfilledData && fishfilledData.map((fish) => {
            return (
              <ItemCard
                key={fish.id}
                items={fish} />
            )
          })}
        </>
      )
    } else if (props.value === 'chicken') {
      return (
        <>
          {chickenfilledData && chickenfilledData.map((chicken) => {
            return (
              <ItemCard
                key={chicken.id}
                items={chicken} />
            )
          })}
        </>
      )
    } else if (props.value === 'desserts') {
      return (
        <>
          {dessertsfilledData && dessertsfilledData.map((desserts) => {
            return (
              <ItemCard
                key={desserts.id}
                items={desserts} />
            )
          })}
        </>
      )
    }

  }

  return (
    <Container>
      {allData &&
        displayData()
      }
    </Container>
  )
}

const Container = styled.div`
  margin-top: 100px;
  margin-left:55px;
  margin-right:30px;
  padding: 20px 0px 20px;
  display: grid;
  grid-gap: 20px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Items