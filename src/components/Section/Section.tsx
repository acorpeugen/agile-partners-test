import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const SectionStyled = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(
    243.71deg,
    rgba(12, 81, 206, 0.82) 4.24%,
    #000 97.67%
  );
`;

export interface SectionProps {
  className?: string;
  children?: ReactNode;
}

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <SectionStyled {...{ className }} {...props}>
      {children}
    </SectionStyled>
  );
};

export default Section;
