import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export default function SEOHead({ title, description, canonicalPath = '/' }: SEOHeadProps) {
  useEffect(() => {
    // Update Document Title
    const fullTitle = `${title} | Sanjay Goswami Prayagraj`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const baseUrl = 'https://sanjaygoswami.in';
    linkCanonical.setAttribute('content', `${baseUrl}${canonicalPath}`);

    // Update Open Graph tags
    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOgTag('og:title', fullTitle);
    setOgTag('og:description', description);
    setOgTag('og:url', `${baseUrl}${canonicalPath}`);
    setOgTag('og:type', 'website');
  }, [title, description, canonicalPath]);

  return null;
}
