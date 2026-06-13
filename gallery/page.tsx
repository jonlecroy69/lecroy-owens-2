'use client';

import { useState } from 'react';
import { BUSINESS, WORK_PHOTOS } from "@/lib/constants";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (index: number) => {
    setModalIndex(index);
    setImageIndex(0);
  };
  const closeModal = () => {
    setModalIndex(null);
    setImageIndex(0);
  };

  const goPrevJob = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + WORK_PHOTOS.length) % WORK_PHOTOS.length);
    setImageIndex(0);
  };

  const goNextJob = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % WORK_PHOTOS.length);
    setImageIndex(0);
  };

  const currentPhoto = modalIndex !== null ? WORK_PHOTOS[modalIndex] : null;
  const currentImages = currentPhoto?.images ?? [];
  const currentImage = currentImages[imageIndex] ?? currentImages[0] ?? null;
  const hasMultipleImages = currentImages.length > 1;

  const goPrevImage = () => {
    if (!hasMultipleImages) return;
    setImageIndex((imageIndex - 1 + currentImages.length) % currentImages.length);
  };

  const goNextImage = () => {
    if (!hasMultipleImages) return;
    setImageIndex((imageIndex + 1) % currentImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <div className="text-[var(--logo-teal)] text-xs tracking-[2px] font-semibold">OUR CRAFTSMANSHIP</div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tighter">Recent Projects in Spartanburg &amp; the Upstate</h1>
        <p className="mt-3 text-[var(--text-muted)] max-w-lg mx-auto">
          Real work we’ve completed for homeowners across the area. These photos show the quality and care we bring to every job — decks, siding, bathrooms, flooring, and full remodels.
        </p>
        <p className="mt-2 text-[var(--logo-cream)] text-sm tracking-[2px]">QUALITY WORK. HONEST PRICES. BUILT TO LAST.</p>
      </div>

      {/* Redesigned gallery grid — clean cards, hover, click to enlarge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WORK_PHOTOS.map((photo, index) => (
          <figure
            key={index}
            onClick={() => openModal(index)}
            className="photo-card group cursor-pointer overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.images[0].src}
              alt={photo.images[0].caption}
              className="w-full aspect-[16/11] object-cover"
            />
            <figcaption className="p-4 border-t border-slate-700">
              <div className="text-[10px] tracking-[1.5px] text-[var(--logo-teal)] font-semibold mb-1">{photo.category}</div>
              <div className="text-sm text-[var(--text-primary)] leading-tight line-clamp-2">{photo.caption}</div>
              <div className="mt-2 text-xs text-[var(--logo-teal)] opacity-70 group-hover:opacity-100 transition">Click to enlarge →</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-[var(--text-muted)]">
          These are just some of our recent projects. Want to see more examples for decks, siding, bathrooms, or your specific job?{" "}
          <a href="/#contact" className="font-semibold underline" style={{ color: 'var(--logo-teal)' }}>Get in touch</a>.
        </p>
        <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`} className="mt-4 inline-block cta-primary">
          Call {BUSINESS.phone}
        </a>
      </div>

      {/* Simple lightbox modal for the redesigned gallery experience */}
      {modalIndex !== null && currentPhoto && currentImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={currentImage.caption}
                className="w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
              />

              {hasMultipleImages && (
                <>
                  <button
                    onClick={goPrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white hover:bg-black/80"
                    aria-label="Previous image in this project"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={goNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white hover:bg-black/80"
                    aria-label="Next image in this project"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="mt-4 text-center">
                <div className="text-[var(--logo-teal)] text-xs tracking-[2px] font-semibold">{currentPhoto.category}</div>
                <p className="mt-1 text-lg text-white max-w-3xl mx-auto">{currentImage.caption}</p>
                {hasMultipleImages && (
                  <div className="mt-2 text-xs text-white/50">
                    Photo {imageIndex + 1} / {currentImages.length}
                  </div>
                )}
              </div>
            </div>

            {/* Project navigation */}
            <button
              onClick={goPrevJob}
              className="absolute left-2 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:-left-14 md:top-1/2 md:-translate-y-1/2"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goNextJob}
              className="absolute right-2 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:-right-14 md:top-1/2 md:-translate-y-1/2"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="mt-3 text-center text-xs text-white/50">
              Project {modalIndex + 1} / {WORK_PHOTOS.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
