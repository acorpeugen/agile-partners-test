import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menu } from './../../data';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
const NavLink = styled(Link)`
  display: inline-flex;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  padding: 8px;
`;

const Navigation = () => {
  const renderLink = menu.map(({ id, path, name }) => {
    return (
      <NavLink to={`/${path}`} key={id} className="nav-link-js">
        {name}
      </NavLink>
    );
  });
  return <Nav>{renderLink}</Nav>;
};

export default Navigation;
