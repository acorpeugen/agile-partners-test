import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: none;
  max-width: 100%;
  height: auto;

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    display: block;
  }
`;

export interface LineSvgProps {
  className?: string;
}

const LineSvg = ({ className }: LineSvgProps) => {
  return (
    <Svg
      fill="none"
      height="333"
      width="1070"
      viewBox="0 0 1070 333"
      {...{ className }}
    >
      <linearGradient
        id="line-gradient"
        gradientUnits="userSpaceOnUse"
        x1="1065"
        x2=".000013"
        y1="113"
        y2="111"
      >
        <stop offset="0" stopColor="#157bfa" stopOpacity="0" />
        <stop offset="1" stopColor="#157bfa" />
      </linearGradient>
      <path
        d="m1070 333c-9.18-27.719-21.48-54.168-36.23-78.857-14.76-24.689-31.91-47.672-50.887-68.668-38.06-41.97-82.899-76.293-130.966-103.3391-24.054-13.5338-48.957-25.2536-74.42-35.2573-6.409-2.3896-12.777-4.8879-19.205-7.1797l-19.395-6.5497-19.585-5.8653c-6.559-1.8357-13.157-3.4758-19.735-5.2246-26.403-6.5496-53.146-11.4374-80.049-14.73941-13.447-1.74875-26.953-2.82407-40.46-3.77991l-20.284-1.01015-20.305-.32585c-27.073-.05431-54.146 1.40117-81.069 4.45334-26.913 3.07388-53.706 7.61408-80.109 14.04428-52.816 12.7518-104.352 32.0749-152.65 58.5451-48.237 26.4593-93.305 60.1523-131.7853 101.3843-19.255 20.561-36.6504 43.186-51.7265 67.484-15.046 24.298-27.7427 50.334-37.40018 77.673l-3.73902-1.553c9.84742-27.644 22.764-53.929 38.06-78.412 15.296-24.482 32.9114-47.249 52.3763-67.908 38.8897-41.427 84.3377-75.153 132.8957-101.5901 48.607-26.4485 100.413-45.663 153.459-58.2953 26.523-6.365 53.406-10.82919 80.419-13.82705 27.013-2.96527 54.166-4.333858 81.309-4.19265431l20.335.41274831 20.334 1.075316c13.537 1.01015 27.073 2.11805 40.55 3.92111 26.953 3.39974 53.746 8.38533 80.179 15.04363 6.588 1.7704 13.196 3.4432 19.755 5.3005l19.604 5.9414 19.415 6.6257c6.439 2.3244 12.817 4.8444 19.225 7.2666 25.484 10.1123 50.397 21.9408 74.461 35.5723 48.067 27.2518 92.876 61.7818 130.856 103.9148 18.947 21.083 36.047 44.142 50.747 68.907 14.69 24.754 26.92 51.257 36.02 79.009z"
        fill="url(#line-gradient)"
      />
    </Svg>
  );
};

export default LineSvg;
