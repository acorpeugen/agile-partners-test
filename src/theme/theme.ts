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
    down_575: '575px',
    down_767: '767px',
    down_991: '991px',
    down_1199: '1199px',
  },
  container: {
    mw_540: '540px',
    mw_720: '720px',
    mw_960: '960px',
    mw_1140: '1140px',
  },
  zIndex: {
    sticky: '1020',
    fixed: '1030',
  },
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export default theme;
