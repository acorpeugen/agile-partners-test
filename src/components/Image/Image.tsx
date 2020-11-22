import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

export interface ImageProps {
  src: string;
  srcSet?: string;
  alt?: string;
  className?: string;
}

const Image = ({
  src,
  srcSet,
  alt = 'To our image – A new Bank Processor powering Cross Border Payments',
  className,
}: ImageProps) => <ImageStyled {...{ src, srcSet, alt, className }} />;

export default Image;
