import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

const Svg = styled.svg`
  display: block;
  max-width: 100%;
  height: auto;
  fill: ${(props) => props.theme.colors.blue};
`;

const BurgerButton = () => {
  return (
    <Button type="button">
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
      </Svg>
    </Button>
  );
};

export default BurgerButton;
