import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  z-index: 2;

  @media (min-width: ${(props) => props.theme.breakpoint.up_576}) {
    max-width: ${(props) => props.theme.container.mw_540};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.up_768}) {
    max-width: ${(props) => props.theme.container.mw_720};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    max-width: ${(props) => props.theme.container.mw_960};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.up_1200}) {
    max-width: ${(props) => props.theme.container.mw_1140};
  }
`;

export interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container = ({ children, className }: ContainerProps) => (
  <ContainerStyled {...{ className }}>{children}</ContainerStyled>
);

export default Container;
