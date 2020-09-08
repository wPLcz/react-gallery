import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Nav>
    <StyledLink to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
      </svg>
    </StyledLink>
  </Nav>
);

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    margin: 0 auto 2vh;
   
    @media (min-width: 960px) {
      padding: 0 4%;
      margin: 0 auto 5vh;
      justify-content: flex-start;
    }
`;

const StyledLink = styled(Link)`
    & svg {
      fill: rgba(68, 72, 79, 0.4);
      width: 25px;
      height: 25px;
      
      @media (min-width: 960px) {
        width: 40px;
        height: 40px;
      }
    }
`;

export default Navigation;
