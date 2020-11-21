import React from 'react';
import styled from 'styled-components';

const ArrowDownStyled = styled.svg`
  margin-bottom: 88px;
`;

export interface ArrowDownSvgProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const ArrowDownSvg = ({
  width = 12,
  height = 24,
  fill = '#fff',
  className,
}: ArrowDownSvgProps) => {
  return (
    <ArrowDownStyled
      {...{ className }}
      fill="none"
      {...{ width, height }}
      viewBox="0 0 12 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 24 1-1 5-5-1.4-1.4-3.6 3.6v-20.20000022l-2-.00000009v20.20000031l-3.6-3.6-1.40000079 1.4 5.00000079 5z"
        {...{ fill }}
      />
    </ArrowDownStyled>
  );
};

export default ArrowDownSvg;
