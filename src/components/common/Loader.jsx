import React from 'react';
import styled, {keyframes} from 'styled-components';

const Loader = () => (
  <Background>
    <SpinnerBox>
      <CircleBorder>
        <CircleCore/>
      </CircleBorder>
    </SpinnerBox>
  </Background>
);

const spin = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`

const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(68, 72, 79, 0.4);
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
`;

const SpinnerBox = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

const CircleBorder = styled.div`
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63,249,220);
    background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
    animation: ${spin};
    animation-duration: .8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

const CircleCore = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1d2630;
    border-radius: 50%;
      


`;

export default Loader;
