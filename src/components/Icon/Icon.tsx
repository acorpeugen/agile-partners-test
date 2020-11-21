import React, { ReactNode } from 'react';
import styled from 'styled-components';

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;
`;

export interface IconProps {
  size?: string;
  marginRight?: string;
  marginLeft?: string;
  borderRadius?: string;
  backgroundColor?: string;
  border?: string;
  children?: ReactNode;
}

const Icon = ({
  size = '24px',
  marginLeft = '',
  marginRight = '',
  backgroundColor = 'transparent',
  borderRadius = '',
  border = '',
  children,
}: IconProps) => {
  return (
    <IconBox
      style={{
        width: size,
        height: size,
        marginLeft,
        marginRight,
        backgroundColor,
        borderRadius,
        border,
      }}
    >
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243c2.16 2.166 2.329 5.557.507 7.91C19.926 12.24 18.99 12 18 12c-3.314 0-6 2.686-6 6 0 1.009.249 1.96.689 2.794l-.69.691-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z" />
        </svg>
      )}
    </IconBox>
  );
};

export default Icon;