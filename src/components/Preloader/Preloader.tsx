import React from 'react';
import styled, { keyframes } from 'styled-components';

const PreloaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  overflow: hidden;
`;

const svgAnimation = keyframes`
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, -50px);
  }
  100% {
    transform: translate(0)
  }
`;

const Svg = styled.svg`
  animation: ${svgAnimation} 2s ease-in-out infinite;
`;

const Preloader = () => {
  return (
    <PreloaderStyled className="preloader-js">
      <Svg
        className="loader-js"
        width="43"
        height="52"
        viewBox="0 0 43 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.498 0C9.59972 0 0 9.58961 0 21.4753V52L9.05889 42.9506V21.4753C9.05889 14.7221 14.6024 9.18442 21.3628 9.18442C28.1231 9.18442 33.6666 14.7221 33.6666 21.4753C33.6666 28.2286 28.2583 33.7662 21.498 33.7662H18.253L9.1941 42.8156H21.498C33.3962 42.8156 42.9959 33.226 42.9959 21.3403C42.9959 9.45455 33.261 0 21.498 0Z"
          fill="#1A5BD1"
        />
      </Svg>
    </PreloaderStyled>
  );
};

export default Preloader;
