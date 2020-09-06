import React from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <StyledButton onClick={() => props.takeNewestSorting(props.id)}>
      {props.children}
    </StyledButton>)
};

const StyledButton = styled.button`
    margin: 0 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.active ? 'red' : '#999'};
    font-size: 24px;
    font-family: Helvetica;
    text-transform: uppercase;
    box-sizing: content-box;
    
    @media (min-width: 1200px) {
      //margin: 0 0 0 2vw;
      //text-align: left;
    }
    
    &:hover {
      
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
