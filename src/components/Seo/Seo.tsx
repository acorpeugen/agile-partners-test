import React from 'react';
import Helmet from 'react-helmet';

export interface SeoProps {
  title: string;
  description: string;
}

function Seo({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

export default Seo;
