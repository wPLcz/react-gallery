import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from "./Button";

const Header = (props) => {
  return (
    <Section>
      <Title>{props.title}</Title>
      <ButtonsContainer>
        {Object.keys(props.options).map(sortingOption => (
            <Button
              active={props.options[sortingOption]}
              key={uuidv4()}
              id={sortingOption}
              takeNewestSorting={(id) => props.takeNewestSorting(id)}>
              {sortingOption}
            </Button>
          )
        )}
      </ButtonsContainer>
    </Section>
  )
};

const Title = styled.h2`
    display: block;
    text-align: center;
    font-size: 32px;
    max-height: 25vh;
    border-radius: 3px;
    font-weight: 200;
    font-family: Helvetica;
    text-transform: uppercase;
    color: #999;
    
    @media (min-width: 960px) {
      margin: 0 auto;
      display: inline-block;
      font-size: 88px;
      margin: 0 0 0 2vw;
      text-align: left;
    }
`;

const Section = styled.section`
    margin: 5vh 0;
    width: 100%;
    max-height: 25vh;  
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media (min-width: 960px) {
      justify-content: flex-start;
      margin: 0 0 0 2%;
    }
`;

Header.propTypes = {
  options: PropTypes.object,
  title: PropTypes.string,
  click: PropTypes.func,
};

Header.defaultProps = {
  options: {},
  title: '',
  click: () => {
  },
};

export default Header;
