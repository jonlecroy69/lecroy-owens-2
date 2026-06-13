import { BUSINESS, SERVICES, LOCATIONS, SERVICE_AREA_DESCRIPTION, SITE_URL } from "./constants";

interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude?: number; // Add real coords later if desired for rich results
  longitude?: number;
}

export function generateLocalBusinessJsonLd() {
  const address: PostalAddress = {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  };

  if (BUSINESS.address.street && BUSINESS.address.street !== "Spartanburg, SC") {
    address.streetAddress = BUSINESS.address.street;
  }
  if (BUSINESS.address.postalCode) {
    address.postalCode = BUSINESS.address.postalCode;
  }

  const areaServed = LOCATIONS.map((loc) => ({
    "@type": "City",
    name: loc,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address,
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Improvement & Remodeling Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.longDesc,
        },
      })),
    },
    // Add when you have exact coords or a real street address with geo
    // geo: { "@type": "GeoCoordinates", latitude: XX, longitude: YY },
    sameAs: [], // Add Facebook, Google Business Profile URL, etc. when available
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-17:00",
  };
}

export function generateServiceJsonLd(serviceSlug: string) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: LOCATIONS.map((loc) => ({ "@type": "City", name: loc })),
    description: service.longDesc,
  };
}

// Convenience: full page schema (LocalBusiness + specific services on home)
export function generateHomepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessJsonLd(),
      ...SERVICES.slice(0, 4).map((s) => generateServiceJsonLd(s.slug)).filter(Boolean),
    ],
  };
}
