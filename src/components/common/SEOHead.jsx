import React from 'react';
// import { Head } from '@unhead/react';

const SEOHead = ({ title, description, keywords, canonical, structuredData }) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chaitali Parlour",
    "image": "https://placehold.co/1200x630/FFC0CB/FFFFFF?text=Chaitali+Parlour+Logo", // Replace with your logo URL
    "url": "https://www.chaitaliparlour.com",
    "telephone": "+91-9130008625",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 5, Beauty Heights, ABC Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204, // Pune Latitude
      "longitude": 73.8567 // Pune Longitude
    },
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.736696956272!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzAxLjEiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1678901234567" // Placeholder for Google Maps embed URL
  };

  const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  return (
    // <Head>
    //   <title>{ title }</title>
    //   <meta name="description" content={ description } />
    //   <meta name="keywords" content={ keywords } />
    //   <link rel="canonical" href={ canonical } />
    //   {/* Open Graph / Facebook */ }
    //   <meta property="og:type" content="website" />
    //   <meta property="og:url" content={ canonical } />
    //   <meta property="og:title" content={ title } />
    //   <meta property="og:description" content={ description } />
    //   <meta property="og:image" content="https://placehold.co/1200x630/FFC0CB/FFFFFF?text=Chaitali+Parlour+OG" /> {/* Replace with OG image */ }

    //   {/* Twitter */ }
    //   <meta property="twitter:card" content="summary_large_image" />
    //   <meta property="twitter:url" content={ canonical } />
    //   <meta property="twitter:title" content={ title } />
    //   <meta property="twitter:description" content={ description } />
    //   <meta property="twitter:image" content="https://placehold.co/1200x630/FFC0CB/FFFFFF?text=Chaitali+Parlour+Twitter" /> {/* Replace with Twitter image */ }

    //   <script type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify(finalStructuredData) } } />
    // </Head>
    <div></div>
  );
};

export default SEOHead;