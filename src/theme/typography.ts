import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    margin-bottom: 60px;
  }
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 24px;
`;

export const H3 = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const H4 = styled.h4`
  color: ${(props) => props.theme.colors.white};
`;
