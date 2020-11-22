import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

import {
  section,
  sectionXl,
  sectionLg,
  sectionMd,
  sectionSm,
} from './../../assets/images';

import { Section } from './../Section';
import { H1, H4 } from './../../theme';
import { Container } from './../Container';
import { Header } from './../Header';
import { Image } from './../Image';
import { ArrowDownSvg } from './../ArrowDownSvg';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 124px);

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    min-height: calc(100vh - 255px);
  }
`;

const SectionFirst = () => {
  useEffect(() => {
    const sectionFirst = document.querySelector('.section-first-js');
    const logo = document.querySelector('.logo-js');
    const title = document.querySelector('.section-first__title-js');
    const subtitle = document.querySelector('.section-first__subtitle-js');
    const navLinks = gsap.utils.toArray('.nav-link-js');
    const arrowDown = document.querySelector('.arrow-down-js');

    const sectionAnimation = gsap.timeline();

    sectionAnimation
      .fromTo(
        sectionFirst,
        {
          backgroundImage:
            'linear-gradient(243.7deg, rgba(255, 255, 255, 1) 4.24%, #fff 97.67%)',
        },
        {
          backgroundImage:
            'linear-gradient(243.7deg, rgba(12, 81, 206, 0.82) 4.24%, #000 97.67%)',
          duration: 0.5,
          delay: 0.5,
        }
      )
      .fromTo(
        [logo, title],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        subtitle,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        navLinks,
        { opacity: 0, x: '30px' },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.2,
          ease: 'Power4.EaseOut',
        }
      )
      .fromTo(
        arrowDown,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        '-=1.4'
      );
  }, []);

  return (
    <Section className="section-first-js">
      <Header />
      <Image
        src={sectionSm}
        srcSet={`${sectionMd} 768w, ${sectionLg} 992w, ${sectionXl} 1200w, ${section} 1440w`}
      />
      <Container>
        <ContentBox>
          <H1 className="section-first__title-js">
            Global Correspondent
            <br /> Banking as a Service
          </H1>
          <H4 className="section-first__subtitle-js">
            Enabling 24x7 Instant Cross-Border Payments
          </H4>
        </ContentBox>
        <ArrowDownSvg className="arrow-down-js" />
      </Container>
    </Section>
  );
};

export default SectionFirst;
