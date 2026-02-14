import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaOrg = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EducationalOrganization",
                "@id": "https://ican-space.vercel.app/#organization",
                "name": "ICAN Academy Ortigas",
                "alternateName": ["아이캔 아카데미", "아이캔 어학원", "ICAN SPACE"],
                "url": "https://ican-space.vercel.app/",
                "logo": "https://ican-space.vercel.app/assets/logo.png", // Ensure this exists or use a valid URL
                "sameAs": [
                    "https://icanacademy.com",
                    "https://www.facebook.com/icanacademy", // Verify exact URL
                    "https://band.us/@icanacademy" // Verify exact URL
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Strata 100, F. Ortigas Jr. Road",
                    "addressLocality": "Ortigas Center",
                    "addressRegion": "Pasig City",
                    "postalCode": "1605",
                    "addressCountry": "PH"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+63-917-817-5703", // Example, replace with real number if available
                    "contactType": "admissions",
                    "areaServed": ["KR", "PH"],
                    "availableLanguage": ["Korean", "English"]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://ican-space.vercel.app/#website",
                "url": "https://ican-space.vercel.app/",
                "name": "ICAN SPACE",
                "publisher": {
                    "@id": "https://ican-space.vercel.app/#organization"
                }
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SchemaOrg;
