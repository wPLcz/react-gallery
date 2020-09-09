import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Thumbnail = (props) => {

  return (
    <Figure
      onClick={() => props.handleClickForDetails(props.id)}
    >
      <Img src={props.src} alt={props.alt}/>
      <Figcaption>
        <ListContainer>
          {props.location && <li>Country: {props.location}</li>}
          {props.likes && <li>Likes number: {props.likes}</li>}
          {props.downloads && <li>Downloads: {props.downloads}</li>}
        </ListContainer>
      </Figcaption>
    </Figure>
  )
};

const Img = styled.img`
    transition: transform 2s ease-out;
    width: 120%;
`;

const ListContainer = styled.ul`
    position: absolute;
    left:0;
    bottom: 0;
    list-style-type: none;
    font-weight: 300;
    font-size: 2rem;
    font-family: Helvetica;
    color: white;
`;

const Figcaption = styled.figcaption`
    margin: 0 auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    opacity: 0;
    display: block;
    position: absolute;
    transition: height 350ms ease-in-out, opacity 250ms ease-in-out 150ms;
    background-color: rgba(68, 72, 79, 0.4);
    align-self: center;
`;

const Figure = styled.figure`
    max-height: 300px;
    display: grid;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    justify-content: center;
    align-content: center;
    background-color: black;
    box-shadow: 0px 0px 5px 1px rgba(87,86,87,1);
    
    
    &:hover ${Img} {
      transform: scale(1.25);
    }
   
    &:hover ${Figcaption} {
      height: 100%;
      opacity: 1;
    }
    @media (min-width: 960px) {
      max-height: 350px;
    }
  
    @media (min-width: 1300px) {
      max-height: 400px;
    }
`;

Thumbnail.propTypes = {
  id: PropTypes.string,
  delayFactor: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Thumbnail.defaultProps = {
  id: uuidv4(),
  delayFactor: 1,
  src: '',
  alt: '',
};

export default Thumbnail;
