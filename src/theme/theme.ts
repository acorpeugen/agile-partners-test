import {} from 'styled-components';

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#35F0DA',
    gray: '#87949E',
    blue: '#1a5bd1',
  },
  breakpoint: {
    up_576: '576px',
    up_768: '768px',
    up_992: '992px',
    up_1200: '1200px',
  },
  container: {
    mw_540: '540px',
    mw_720: '720px',
    mw_960: '960px',
    mw_1140: '1140px',
  },
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export default theme;
