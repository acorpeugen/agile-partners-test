import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLinkDefault = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 13px 32px;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonLinkPrimary = styled(ButtonLinkDefault)`
  background-color: ${(props) => props.theme.colors.primary};
`;

export interface ButtonLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
  text?: string;
}

const ButtonLink = ({ to, className, children, text }: ButtonLinkProps) => {
  return (
    <ButtonLinkDefault {...{ to, className }}>
      {children ? children : text}
    </ButtonLinkDefault>
  );
};

export default ButtonLink;
