import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menu } from './../../data';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: ${(props) => props.theme.breakpoint.down_991}) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: -1;

    &.is-active {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      visibility: visible;
      z-index: ${(props) => props.theme.zIndex.fixed};
      pointer-events: auto;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    position: relative;
    top: auto;
    left: auto;
    justify-content: flex-end;
    flex-direction: row;
    background-color: transparent;
  }
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
  return <Nav className="is-activ">{renderLink}</Nav>;
};

export default Navigation;
