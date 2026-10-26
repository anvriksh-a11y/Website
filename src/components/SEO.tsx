import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    structuredData?: object;
    ogImage?: string;
    ogType?: string;
    twitterHandle?: string;
    articlePublishedTime?: string;
    articleAuthor?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonicalUrl,
    structuredData,
    ogImage = "/platform_hero.png",
    ogType = "website",
    twitterHandle = "@anvriksh",
    articlePublishedTime,
    articleAuthor
}) => {
    useEffect(() => {
        // Update Title
        const fullTitle = title === 'ANVRiksh' ? title : `${title} | ANVRiksh`;
        document.title = fullTitle;

        // Update Meta Tags Helper
        const setMetaTag = (value: string, content: string, isProperty: boolean = false) => {
            const selector = isProperty ? `meta[property="${value}"]` : `meta[name="${value}"]`;
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(isProperty ? 'property' : 'name', value);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Standard Meta Tags
        setMetaTag('description', description);
        if (keywords) setMetaTag('keywords', keywords);

        // Open Graph / Facebook
        setMetaTag('og:title', fullTitle, true);
        setMetaTag('og:description', description, true);
        setMetaTag('og:type', ogType, true);
        setMetaTag('og:image', `https://anvriksh.com${ogImage}`, true);
        setMetaTag('og:site_name', 'ANVRiksh Tech Solutions LLP', true);
        setMetaTag('og:locale', 'en_IN', true);
        if (canonicalUrl) setMetaTag('og:url', canonicalUrl, true);

        // Indexing
        setMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
        
        if (ogType === 'article') {
            if (articlePublishedTime) setMetaTag('article:published_time', articlePublishedTime, true);
            if (articleAuthor) setMetaTag('article:author', articleAuthor, true);
        }

        // Twitter
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', fullTitle);
        setMetaTag('twitter:description', description);
        setMetaTag('twitter:image', `https://anvriksh.com${ogImage}`);
        setMetaTag('twitter:site', twitterHandle);

        // Update Canonical Link
        if (canonicalUrl) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonicalUrl);
        }

        // Add Structured Data (JSON-LD)
        if (structuredData) {
            let script = document.querySelector('script[type="application/ld+json"]');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(structuredData);
        }

    }, [title, description, keywords, canonicalUrl, structuredData, ogImage, ogType, twitterHandle, articlePublishedTime, articleAuthor]);

    return null;
};

export default SEO;
