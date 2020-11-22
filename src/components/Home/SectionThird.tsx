import React, { useEffect } from 'react';
import styled from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { H3 } from './../../theme';

import { Section } from './../Section';
import { Container } from './../Container';
import { Image } from './../Image';
import { Icon } from './../Icon';
import { ButtonLinkPrimary } from './../Buttons';
import { Footer } from './../Footer';

import {
  footer,
  footerXl,
  footerLg,
  footerMd,
  footerSm,
} from './../../assets/images';
import { arrowRight } from './../../assets/svg';

gsap.registerPlugin(ScrollTrigger);

const SectionStyled = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: none;
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    243.71deg,
    rgba(12, 81, 206, 0.82) 4.24%,
    #000 97.67%
  );
  z-index: 2;
`;

const SectionThirdTitle = styled(H3)`
  padding-top: 50px;
  margin-bottom: 50px;
  max-width: 988px;
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoint.up_992}) {
    padding-top: 140px;
    margin-bottom: 130px;

    .section-third__btn-js {
      margin-bottom: 0;
    }
  }
`;

const P = styled.p`
  max-width: 870px;
  margin-bottom: 48px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  line-height: 1.2;
`;

const H5 = styled.h5`
  max-width: 879px;
  margin-bottom: 58px;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.6;
`;

const Button = styled(ButtonLinkPrimary)`
  margin-bottom: 30px;
`;

const SectionThird = () => {
  useEffect(() => {
    const span = document.querySelector('.section-third__span-js');
    const title = document.querySelector('.section-third__title-js');
    const content = document.querySelector('.section-third__content-js');
    const subtitle = document.querySelector('.section-third__subtitle-js');
    const button = document.querySelector('.section-third__btn-js');

    ScrollTrigger.saveStyles([span, title, content, subtitle, button]);

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.section-third-js',
              start: 'top 50%',
              end: 'bottom bottom',
              scrub: 1,
            },
          })
          .fromTo(
            span,
            {
              backgroundImage:
                'linear-gradient(243.71deg, rgba(26, 27, 29, 0.95) 4.24%, #0D1528 97.67%)',
            },
            {
              backgroundImage:
                'linear-gradient(243.7deg, rgba(12, 81, 206, 0.82) 4.24%, #000 97.67%)',
            }
          )
          .fromTo(
            [title, content, subtitle, button],
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
            }
          );
      },
    });
  }, []);

  return (
    <SectionStyled className="section-third-js">
      <Span className="section-third__span-js"></Span>
      <Image
        src={footerSm}
        srcSet={`${footerMd} 768w, ${footerLg} 992w, ${footerXl} 1200w, ${footer} 1440w`}
        className="position-absolute z-index-1 section-third__img-js"
      />
      <Container>
        <SectionThirdTitle className="section-third__title-js">
          A global singled shared platform purpose-built to power instant
          cross-border payments and a new bank network construct that transforms
          correspondent banking and empowers recipients.
        </SectionThirdTitle>
        <div className="section-third__content-js">
          <P>
            Does your bank provide correspondent banking services so foreign
            banks can make domestic payments? If so, we have a special message
            for you…
          </P>
        </div>
        <H5 className="section-third__subtitle-js">
          Let us simplify and improve foreign bank oversight, expand and
          modernize payer and recipient options and ensure you operate safely
          with transparent and communally shared KYB, source of funds and
          economic legitimacy of payments.
        </H5>
        <Button to="/" className="section-third__btn-js">
          Learn More
          <Icon marginLeft="30px">
            <img src={arrowRight} alt="arrow-right" />
          </Icon>
        </Button>
      </Container>
      <Footer />
    </SectionStyled>
  );
};

export default SectionThird;
