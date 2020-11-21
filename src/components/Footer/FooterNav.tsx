import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { footerNav } from './../../data';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.75rem;
  line-height: 1.2;
  padding: 10px;
  text-decoration: none;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.up_768}) {
    padding: 20px;
  }
`;

const FooterNav = () => {
  const renderItem = footerNav.map(({ id, path, name }) => {
    return (
      <NavLink to={`/${path}`} key={id}>
        {name}
      </NavLink>
    );
  });
  return <Nav>{renderItem}</Nav>;
};

export default FooterNav;
