import React from 'react';
import styled, {keyframes}  from 'styled-components';

const Loader = () => {
  return (
    <StyledContainer>
      <StyledLoader/>
    </StyledContainer>
  )
};

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    position: fixed;
    left: 0;
    top: 0;
    justify-content: center;
    align-content: center;
    background-color: rgba(68, 72, 79, 0.2);
`;

const rotation = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const StyledLoader = styled.div`
    display: inline-block;
    width: 150px;
    height: 150px;
    margin: 8px;
    border-radius: 50%;
    background: #fff;
    animation: ${rotation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

export default Loader;
