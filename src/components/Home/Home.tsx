import React from 'react';
import { Seo } from './../Seo';

import SectionFirst from './SectionFirst';
import SectionSecond from './SectionSecond';
import SectionThird from './SectionThird';

const Home = () => {
  return (
    <>
      <Seo
        title="Payall Cross Border Processing for Banks"
        description="A new type of processor - Correspondent Banking as a Service and enabling
24x7 Instant Cross-Border Payments"
      />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
    </>
  );
};

export default Home;
