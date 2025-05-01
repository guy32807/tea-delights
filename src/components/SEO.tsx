import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
  const siteTitle = 'Tea Delights | Premium Adagio Teas Blog';
  const siteUrl = 'https://tea-delights.com';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultImage = '/images/tea-delights-logo.jpg';
  const imageUrl = image ? image : defaultImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Keywords for SEO */}
      <meta name="keywords" content="premium tea, Adagio Teas, loose leaf tea, tea brewing, tea health benefits, green tea, black tea, herbal tea, tea guide" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;