import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Clarity Group";
const BASE_URL = "https://www.claritygroup.co.za";

const SEO = ({ title, description, canonical, type = "website", jsonLd }: SEOProps) => {
  const fullTitle = title === "Home" 
    ? `${SITE_NAME} | Corporate Finance Advisory` 
    : `${title} | ${SITE_NAME}`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

// Reusable structured data builders
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clarity Group",
  legalName: "Clarity Group (Pty) Ltd",
  url: "https://www.claritygroup.co.za",
  logo: "https://www.claritygroup.co.za/og-image.png",
  description:
    "Clarity Group is an independent corporate finance advisory firm based in Johannesburg, South Africa. We provide specialised advice on mergers and acquisitions, capital raising, valuations, BEE transactions, and strategic consulting to unlisted corporates and entrepreneurs across Southern Africa.",
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "Don Millar",
    jobTitle: "Managing Director",
    url: "https://www.linkedin.com/in/don-millar-03876412/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Illovo, Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27834505566",
    contactType: "customer service",
    email: "info@claritygroup.co.za",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/in/don-millar-03876412/",
  ],
  areaServed: {
    "@type": "Place",
    name: "Southern Africa",
  },
  knowsAbout: [
    "Mergers and Acquisitions",
    "Capital Raising",
    "Business Valuations",
    "BEE Transactions",
    "Management Buy-outs",
    "Corporate Finance Advisory",
    "Strategic Consulting",
    "Investment Banking",
    "Private Equity",
    "Debt Restructuring",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Clarity Group",
  url: "https://www.claritygroup.co.za",
  description: "Independent corporate finance advisory firm in Johannesburg, South Africa.",
  publisher: {
    "@type": "Organization",
    name: "Clarity Group",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Clarity Group",
  image: "https://www.claritygroup.co.za/og-image.png",
  url: "https://www.claritygroup.co.za",
  telephone: "+27834505566",
  email: "info@claritygroup.co.za",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Illovo",
    addressRegion: "Johannesburg, Gauteng",
    addressCountry: "ZA",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "$$$$",
  description:
    "Clarity Group provides independent corporate finance advisory services including M&A, capital raising, valuations, and BEE transactions to unlisted corporates and entrepreneurs in Southern Africa.",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Don Millar",
  jobTitle: "Managing Director",
  worksFor: {
    "@type": "Organization",
    name: "Clarity Group",
  },
  description:
    "Don Millar is the Managing Director of Clarity Group with over 25 years of experience in investment banking and corporate finance. He holds a B.Com (Hons) and CA(SA) qualification.",
  url: "https://www.claritygroup.co.za/people",
  sameAs: ["https://www.linkedin.com/in/don-millar-03876412/"],
  alumniOf: ["Rand Merchant Bank", "BoE (Nedbank Capital)"],
  knowsAbout: [
    "Mergers and Acquisitions",
    "Capital Raising",
    "Corporate Finance",
    "Investment Banking",
    "Business Valuations",
  ],
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const serviceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: "Clarity Group",
    url: "https://www.claritygroup.co.za",
  },
  areaServed: {
    "@type": "Place",
    name: "Southern Africa",
  },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://www.claritygroup.co.za${item.url}`,
  })),
});
