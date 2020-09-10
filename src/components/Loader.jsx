import React, { useEffect } from 'react';
import styled  from 'styled-components';

const Loader = () => {
  return (
    <StyledContainer/>
  )
};

const StyledContainer = styled.div`
    padding: 0;
    margin: 0 15px;
    border: none;
    background-color: transparent;
    position: relative;
    text-align: center;
    cursor: pointer;
    color: ${({ active }) =>  active  ? '#CB626E;' : '#999'};
    font-size: 14px;
    font-family: Helvetica;
    text-transform: uppercase;
    
    &::after {
    position: absolute;
    display: block;
    content: '';
    bottom: -10px;
    background-color: ${({ active }) =>  active ? '#CB626E;' : '#999'};
    width: 0%;
    height: 2px;
    transition: width 250ms ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }   
    }
    
    @media (min-width: 960px) {
      margin: 0 25px;
      font-size: 24px;
    }
`;

export default Loader;
