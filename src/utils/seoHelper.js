import React from 'react';

// SEO Helper Hook for React
// Usage: usePageSEO({ title, description, keywords, ogImage })

export const usePageSEO = (config) => {
  React.useEffect(() => {
    // Update document title
    if (config.title) {
      document.title = `${config.title} | SimplifyCare Inc`;
    }

    // Update meta description
    if (config.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.description);
      }
    }

    // Update meta keywords
    if (config.keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', config.keywords);
      }
    }

    // Update Open Graph
    if (config.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', config.ogImage);
      }
    }

    if (config.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', config.ogTitle);
      }
    }

    if (config.ogDescription) {
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', config.ogDescription);
      }
    }
  }, [config]);
};

// Structured Data helper
export const generateServiceSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": service.name,
    "description": service.description,
    "url": `https://simplifycare.com/#services`,
    "image": service.image,
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };
};

// JSON-LD injector
export const injectStructuredData = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export default usePageSEO;
