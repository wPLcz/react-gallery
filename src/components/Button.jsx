import React, { useEffect } from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <StyledButton active={props.active} onClick={() => props.takeNewestSorting(props.id)}>
      {props.children}
    </StyledButton>)
};

const StyledButton = styled.button`
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

Button.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  takeNewestSorting: PropTypes.func,
};

Button.defaultProps = {
  active: false,
  id: '',
  takeNewestSorting: ()=> {},
};

export default Button;
