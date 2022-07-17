import styled from "styled-components";
import React from "react";
import fruits from '../../images/fruits.png'
import fish from '../../images/fish.png'
import desserts from '../../images/desserts.png'
import chikn from '../../images/chikn.png'
import fruit_vid from '../../Video/fruit_vid.mp4'
import fish_vid from '../../Video/fish_vid.mp4'
import chicken_vid from '../../Video/chicken_vid.mp4'
import desserts_vid from '../../Video/desserts_vid.mp4'


const Viewers = ({ showItems }) => {


  return (
    <Container>
      <Wrap onClick={() => showItems('fruits')}>
        <img src={fruits} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={fruit_vid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={() => showItems('fish')}>
        <img src={fish} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={fish_vid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={() => showItems('chicken')}>
        <img src={chikn} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={chicken_vid} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={() => showItems('desserts')}>
        <img src={desserts} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={desserts_vid} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  margin-left:30px;
  margin-right:30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  background-color:#2a2c41;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.8);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;