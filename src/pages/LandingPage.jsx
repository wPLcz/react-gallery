import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const LandingPage = props => {

  useEffect(() => {

  });

  return (
    <h1>LandingPage</h1>
  );
};


const Availability = styled.div`
  @media (min-width: 768px) {
    //grid-column: 7/10;
    //grid-row: 6/8;
  }
`;

const Container = styled.div`
  //width: 100%;
  //display: grid;
  //row-gap: 5vh;
  //font-family: 'BebasNeueRegular';
  
  @media (min-width: 768px) {
    //height: 100vh;
    //display: grid;
    //row-gap: normal;
    //grid-template-columns: repeat(10, 10%);
    //grid-template-rows: repeat(10, 10%);
  }
`;


export default LandingPage;
