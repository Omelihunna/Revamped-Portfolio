import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://iheanacho-portfolio.vercel.app';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO = ({
  title = "Iheanacho Omelihunna - Full-Stack Engineer",
  description = "Iheanacho Omelihunna is a Full-Stack Engineer specializing in building robust backend systems, dynamic frontend interfaces, and cross-platform mobile applications.",
  keywords = "Iheanacho Omelihunna, software engineer, full-stack developer, React, Node.js, TypeScript, Solidity, Blockchain, Nigeria",
  image = `${SITE_URL}/og-image.png`,
  url = `${SITE_URL}/`,
  type = "website",
  author = "Iheanacho Omelihunna",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) => {
  const siteName = "Iheanacho Omelihunna";
  // const twitterHandle = ""; // No twitter provided

  // Structured data for person
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Iheanacho Omelihunna",
    "jobTitle": "Full-Stack Engineer",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://github.com/Omelihunna"
    ],
    "knowsAbout": [
      "Software Development",
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Full Stack Development",
      "Blockchain",
      "Solidity"
    ],
    "workLocation": {
      "@type": 'Place',
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Nigeria"
      }
    }
  };

  // Article structured data if applicable
  const articleStructuredData = publishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon-32x32.png`
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content={twitterHandle} /> */}
      {/* <meta name="twitter:creator" content={twitterHandle} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Article specific meta tags */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS prefetch for social media */}
      <link rel="dns-prefetch" href="https://github.com" />
    </Helmet>
  );
};

export default SEO; 