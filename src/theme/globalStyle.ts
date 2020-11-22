import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fluidFontSize } from './mixins';

const GlobalStyle = createGlobalStyle`
  /**
    * @description Reset CSS for styled-components
    * @author Eric Meyer's
    * @see {@link https://github.com/zacanger/styled-reset#readme}
  */
  ${reset}

  body {
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    overscroll-behavior: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
    font-weight: 600;
  }

  h1 {
    font-size: 60px;
    ${fluidFontSize(36, 60)};
  }

  h2 {
    font-size: 3.125rem;
    ${fluidFontSize(30, 50)};
  }

  h3 {
    font-size: 1.875rem;
    ${fluidFontSize(24, 30)};
  }

  h4 {
    font-size: 24px;
    ${fluidFontSize(20, 24)};
  }

  h5 {
    font-size: 1.25rem;
    ${fluidFontSize(18, 20)};
  }

  .text-center {
    text-align: center;
  }

  .position-sticky {
    position: sticky;
  }

  .position-absolute {
    position: absolute;
  }

  .z-index-1 {
    z-index: 1;
  }
`;

export default GlobalStyle;
