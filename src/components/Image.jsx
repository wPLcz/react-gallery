import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Image = (props) => {
  useEffect(() => {

  },[]);


  return (
    <Figure>
      <Img src={props.src} alt={props.alt}/>
      <Figcaption>
        {props.description}
      </Figcaption>
    </Figure>)
};

const Img = styled.img`
    transition: transform 2s ease-out;
    width: 150%;
    align-self: center;
`;

const Figure = styled.figure`
    box-shadow: 0px 0px 15px 1px rgba(87,86,87,1);
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    max-height: 300px;
   
    @media (min-width: 960px) {
      max-height: 350px;
    }
  
    @media (min-width: 1300px) {
      max-height: 400px;
    }
    &:hover ${Img} {
    transform: scale(1.25);
    }
`;

const Figcaption = styled.figcaption`
    //background-color: blue;
`;

Image.propTypes = {
  id: PropTypes.string,
  delayFactor: PropTypes.number,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  id: uuidv4(),
  delayFactor: 1,
  description: '',
  src: '',
  alt: '',
};

export default Image;
