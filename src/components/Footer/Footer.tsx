import React from 'react';
import styled from 'styled-components';
import FooterNav from './FooterNav';
import { Container } from './../Container';

const FooterStyled = styled.footer`
  align-self: flex-end;
  padding: 16px 0;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoint.up_768}) {
    flex-direction: row;
  }
`;

const Copyright = styled.small`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.breakpoint.up_768}) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Row>
          <Copyright>
            Payall Payment Systems &copy; 2020. All Rights Reserved.
          </Copyright>
          <FooterNav />
        </Row>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
