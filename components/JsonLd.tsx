import { generateHomepageSchema } from "@/lib/schema";

export default function JsonLd({ schema }: { schema?: object }) {
  const jsonLd = schema ?? generateHomepageSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}