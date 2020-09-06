import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import LongDescription from '../components/LongDescription';
import Numeric from '../components/Numeric';
import ShortDescription from '../components/ShortDescription';
import Title from '../components/Title';
import HighlightedWord from '../components/HighlightedWord';

const Introduction = props => {
  const container = useRef(null);

  useEffect(() => {
    props.setRef(container.current);
  });

  return (
    <Container ref={container}>
      <Profile>
        <Numeric>00</Numeric>
        <Title>wplcz</Title>
        <ShortDescription>Extremely commmited Frontend Developer</ShortDescription>
        <LongDescription>

        </LongDescription>
      </Profile>

      <Availability>
        <Numeric>00</Numeric><Numeric suborder>1</Numeric>
        <ShortDescription>Availability</ShortDescription>
        <LongDescription>
          Ready for new challenges so feel free to&nbsp;
          <HighlightedWord version={'color'}>contact me</HighlightedWord>
        </LongDescription>
      </Availability>
    </Container>
  );
};

const Profile = styled.div`
  @media (min-width: 768px) {
    grid-column: 3/6;
    grid-row: 3/8;
  }
`;

const Availability = styled.div`
  @media (min-width: 768px) {
    grid-column: 7/10;
    grid-row: 6/8;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  row-gap: 5vh;
  font-family: 'BebasNeueRegular';
  
  @media (min-width: 768px) {
    height: 100vh;
    display: grid;
    row-gap: normal;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(10, 10%);
  }
`;


export default Introduction;
