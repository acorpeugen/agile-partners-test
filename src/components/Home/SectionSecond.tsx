import React, { useEffect } from 'react';
import styled from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { points } from './../../data';
import map from './../../assets/svg/map.svg';

import { Section } from './../Section';
import { Container } from './../Container';
import { H2, H3 } from './../../theme';
import { LineSvg } from './../LineSvg';

gsap.registerPlugin(ScrollTrigger);

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const SectionStyled = styled(Section)`
  border: solid ${(props) => props.theme.colors.white} 16px;
  min-height: calc(100vh - 130px);
  padding-top: 30px;

  ${Row} {
    min-height: calc(100vh - 130px);
  }

  ${H2},
  ${H3} {
    text-align: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    border: solid ${(props) => props.theme.colors.white} 32px;
    padding-top: 66px;
  }
`;

const ActionBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tooltip = styled.span`
  position: relative;
  display: inline-flex;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  background-color: #435068;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 22px;
  padding: 4px 12px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -16px;
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    border: 2px solid ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const TooltipBox = styled.div`
  position: absolute;
  z-index: 1;

  &:first-of-type {
    left: 53px;
    bottom: 124px;
  }

  &:nth-of-type(2) {
    left: 157px;
    bottom: 227px;
  }

  &:nth-of-type(3) {
    left: 239px;
    bottom: 277px;
  }

  &:nth-of-type(4) {
    left: 50%;
    bottom: calc(100% + 17px);
  }

  &:nth-of-type(4) ${Tooltip} {
    padding: 2px 12px;
    background-color: #157bfa;
    font-size: 1.375rem;
    line-height: 27px;
    color: ${(props) => props.theme.colors.white};

    &::after {
      bottom: -24px;
    }
  }
`;

const MapBox = styled.div`
  position: absolute;
  bottom: 25px;
`;

const Map = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const vh = window.innerHeight / 2;

const SectionSecond = () => {
  /**
   * @description SectionSecond animation with GSAP - GreenSock and ScrollTrigger plugin:
   * @see https://greensock.com/
   * GSAP - GreenSock Documentation
   * @see https://greensock.com/docs/
   * Plugin ScrollTrigger
   * @see https://greensock.com/docs/v3/Plugins/ScrollTrigger
   */

  useEffect(() => {
    // Title and subtitle scroll animation

    const title = document.querySelector('.title-js');
    const subtitle = document.querySelector('.subtitle-js');
    const line = document.querySelector('.line-js');
    const map = document.querySelector('.map-js');
    const tooltip = gsap.utils.toArray('.tooltip-js');

    ScrollTrigger.saveStyles(
      '.title-js, .subtitle-js, .line-js, .map-js, .tooltip-js'
    );
    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function () {
        gsap.set([title, subtitle, line, map, tooltip], {
          opacity: 0,
          ease: 'sine.inOut',
        });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.container-js',
              start: 'top 50%',
              end: 'bottom bottom',
              scrub: 0.5,
            },
          })
          .fromTo(
            title,
            { y: vh, fontSize: '3.125em' },
            {
              duration: 4,
              opacity: 1,
              fontSize: '2.5em',
              y: 0,
            }
          )
          .fromTo(
            subtitle,
            { y: vh, fontSize: '1.875em' },
            {
              opacity: 1,
              fontSize: '1.5625em',
              y: 0,
              duration: 4,
            },
            '-=4'
          )
          .fromTo([line, map], { y: 100 }, { opacity: 1, y: 0, duration: 2 })
          .fromTo(tooltip, {}, { opacity: 1, stagger: 1 });
      },
    });
  }, []);

  const renderPoints = points.map(({ id, name }) => {
    return (
      <TooltipBox className="tooltip-js" key={id}>
        <Tooltip>{name}</Tooltip>
      </TooltipBox>
    );
  });

  return (
    <SectionStyled>
      <Container className="container-js">
        <Row>
          <H2 className="title-js">A New Form of Bank Processor</H2>
          <H3 className="subtitle-js">Powering Cross-Border Payments</H3>
          <ActionBox>
            <Box className="box-js">
              {renderPoints}
              <LineSvg className="line-js" />
              <MapBox className="map-js">
                <Map src={map} alt="map" />
              </MapBox>
            </Box>
          </ActionBox>
        </Row>
      </Container>
    </SectionStyled>
  );
};

export default SectionSecond;
