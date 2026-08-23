"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
  isTurkish: boolean;
};

const galleryImages = [
  "/images/Image6.webp",
  "/images/Image4.webp",
  "/images/Image5.webp",
  "/images/Image7.webp",
  "/images/Image3.webp",
  "/images/Image8.webp",
  "/images/Image1.webp",
  "/images/Image2.webp",
  "/images/Image9.webp",
  "/images/Image10.webp",
];

export default function ImageSlider({ isTurkish }: Props) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#F4F7EF] px-6 py-24 text-[#003C3F]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight md:text-5xl">
            {isTurkish ? "Web Sitesi Galerisi" : "Website Gallery"}
          </h2>
        </div>

        <div className="relative mx-auto flex max-w-5xl items-center justify-center">
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#003C3F]/10 text-[#003C3F] transition hover:bg-[#B6D957]"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="relative h-[620px] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <Image
              src={galleryImages[current]}
              alt={`Gallery image ${current + 1}`}
              fill
              className="object-cover"
              priority={current === 0}
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#003C3F]/10 text-[#003C3F] transition hover:bg-[#B6D957]"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-10 bg-[#B6D957]"
                  : "w-2 bg-[#003C3F]/30"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="mt-5 text-center text-sm font-medium text-[#003C3F]/60">
          {current + 1} / {galleryImages.length}
        </div>
      </div>
    </section>
  );
}