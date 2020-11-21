import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './../../assets/svg/logo.svg';

const LogoStyled = styled(Link)`
  display: flex;
  width: 104px;
`;

const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Logo = () => {
  return (
    <LogoStyled to="/" className="logo-js">
      <ImageStyled src={logo} alt="logo" />
    </LogoStyled>
  );
};

export default Logo;
