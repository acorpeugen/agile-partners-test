import React from 'react';
import styled from 'styled-components';
import { Container } from './../Container';
import { Logo } from './../Logo';
import { Navigation } from './../Navigation';

const HeaderStyled = styled.header`
  padding: 52px 0;
`;

const Row = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Row>
          <Logo />
          <Navigation />
        </Row>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
