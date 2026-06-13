import Link from "next/link";
import { Service } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  featuredImageBase?: string;
}

export default function ServiceCard({ service, featuredImageBase = "/images/work/" }: ServiceCardProps) {
  const imgSrc = service.image ? `${featuredImageBase}${service.image}` : "/images/work/image-d7352d30-f24f-4702-9307-99f41702a9af.jpg";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-lg text-slate-900 tracking-tight">{service.title}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3 flex-1">{service.shortDesc}</p>

        <Link
          href={`#${service.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:gap-1.5 transition-all"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}