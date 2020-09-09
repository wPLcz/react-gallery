import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TweenMax } from "gsap";
import SocialMedia from "../components/SocialMedia";

const SingleImagePage = (props) => {
  const [loaded, setStatus] = useState(false);
  const singleImageContainer = useRef(null);

  useEffect(() => {
    if (loaded) {
      TweenMax.to(singleImageContainer.current, 1.5, {
        opacity: 1,
      }, 1.5);
    }
  }, [loaded]);

  return (
    <Container ref={singleImageContainer}>
      <ImgContainer>
        <Close onClick={props.handleClose}/>
        <Img
          onLoad={() => setStatus(true)}
          src={props.image && props.image.urls && props.image.urls.full}
          alt={props.image && props.image.alt_description}
        />
        <ListContainer>
          {props.image && props.image.createdAt ? <li>Created at: {props.image.createdAt}</li> : null}
          {props.image && props.image.location ? <li>Place: {props.image.location.name}</li> : null}
          {props.image && props.image.views ? <li>Total views:: {props.image.views}</li> : null}
          {props.image && props.image.downloads ? <li>Downloads: {props.image.downloads}</li> : null}
          {props.image && props.image.likes ? <li>Likes number: {props.image.likes}</li> : null}
        </ListContainer>
        <SocialMedia/>
      </ImgContainer>
    </Container>
  );
};

const ImgContainer = styled.div`
    position: relative;
`;

const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: rgba(68, 72, 79, 0.6);
  transition: transform 150ms ease-in-out 50ms, background-color 250ms ease;
  cursor: pointer;
  
  &::before {
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 2px;
    transition: width 250ms ease-in-out, background-color 250ms ease;
    transform:rotate(45deg);
    background-color: black;
    border-radius: 1px;
  }
  
  &::after {
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 2px;
    background-color: black;
    transition: width 250ms ease-in-out, background-color 250ms ease;
    transform:rotate(-45deg);
    border-radius: 1px;
  }
  
  &:hover {
    transform: rotate(360deg);
    background-color: rgba(68, 72, 79, 0.8);
    
      &::after {
        background-color: white;
        width: 4px;
      }
      
      &::before {
        background-color: white;
        width: 4px;
      }
  }
  
    &:hover:active {
    transform: rotate(360deg);
    
    
      &::after {
        transform:rotate(315deg);
        background-color: white;
        width: 6px;
      }
      
      &::before {
        transform:rotate(405deg);
        background-color: white;
        width: 6px;
      }
  }
  
  @media (min-width: 960px) {
    right: 75px;
    top: 75px;
    width: 75px;
    height: 75px;
  }
 
`;

const Img = styled.img`
    max-width: 90vw;
    max-height: 90vh;
`;

const ListContainer = styled.ul`
    position: absolute;
    left:5%;
    bottom: 5%;
    list-style-type: none;
    font-weight: 300;
    font-size: 2rem;
    font-family: Helvetica;
    color: white;
    background-color: rgba(68, 72, 79, 0.6);
    
    & li {
      margin: 15px 0;
    }
    
    @media (min-width: 960px) {
      padding: 50px;
      font-size: 3rem;
    }
  
`;

const Container = styled.div`
    opacity: 0;
    display: grid;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    justify-content: center;
    overflow: hidden;
    background-color: #a9a9a9;
`;

export default SingleImagePage;
