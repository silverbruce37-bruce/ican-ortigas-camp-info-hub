import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaOrg = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EducationalOrganization",
                "@id": "https://ican-ortigas-camp-info-hub.vercel.app/#organization",
                "name": "아이캔 올티가스 캠프 (ICAN Ortigas Camp)",
                "alternateName": ["아이캔 아카데미", "ICAN Academy", "ICAN SPACE"],
                "url": "https://ican-ortigas-camp-info-hub.vercel.app/",
                "logo": "https://ican-ortigas-camp-info-hub.vercel.app/assets/logo.png",
                "sameAs": [
                    "https://icanacademy.com",
                    "https://www.facebook.com/icanacademy",
                    "https://band.us/@icanacademy",
                    "https://blog.naver.com/icanacademy"
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "16F Strata 100 Building, Emerald Ave",
                    "addressLocality": "Ortigas Center",
                    "addressRegion": "Pasig City",
                    "postalCode": "1605",
                    "addressCountry": "PH"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 14.5869,
                    "longitude": 121.0628
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+82-70-7014-2233",
                    "contactType": "admissions",
                    "areaServed": ["KR", "PH"],
                    "availableLanguage": ["Korean", "English"]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://ican-ortigas-camp-info-hub.vercel.app/#website",
                "url": "https://ican-ortigas-camp-info-hub.vercel.app/",
                "name": "ICAN SPACE - 올티가스 영어 캠프 정보",
                "publisher": {
                    "@id": "https://ican-ortigas-camp-info-hub.vercel.app/#organization"
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
