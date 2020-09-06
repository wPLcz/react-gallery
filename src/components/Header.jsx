import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from "./Button";

const Header = (props) => {
  return (
    <Section>
      <Title>{props.title}</Title>
      {Object.keys(props.options).map(sortingOption => {
        return (
          <Button
            active={props.options[sortingOption]}
            key={uuidv4()}
            id={sortingOption}
            takeNewestSorting={(id) => props.takeNewestSorting(id)}>
            {sortingOption}
          </Button>
        )
      })}
    </Section>
  )
};

const Title = styled.h2`
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    font-size: 96px;
    max-height: 25vh;
    border-radius: 3px;
    font-weight: 700;
    font-family: Helvetica;
    text-transform: uppercase;
    color: #999;
    
    @media (min-width: 1200px) {
      margin: 0 0 0 2vw;
      text-align: left;
    }
  
`;

const Section = styled.section`
    margin: 5vh 0;
    width: 100%;
    display: block;
    max-height: 25vh;
`;

Header.propTypes = {
  options: PropTypes.object,
  title: PropTypes.string,
  click: PropTypes.func,
};

Header.defaultProps = {
  title: '',
  click: () => {
  },
};

export default Header;
