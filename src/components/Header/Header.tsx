import React from 'react';
import styled from 'styled-components';
import { Container } from './../Container';
import { Logo } from './../Logo';
import { BurgerButton } from './../Buttons';
import { Navigation } from './../Navigation';

const HeaderStyled = styled.header`
  padding: 19px 0;

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    padding: 52px 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Row>
          <Logo />
          <BurgerButton />
          <Navigation />
        </Row>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
