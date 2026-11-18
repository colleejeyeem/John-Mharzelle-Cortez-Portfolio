
"use client";

import Image from "next/image";
import { useState } from "react";

const screenshots = [
  {
    title: "Homepage",
    description:
      "The main interface of SmartSip, designed to provide customers with a clean and accessible café experience.",
    image: "/projects/smartsip/homepage.png",
  },
  {
    title: "Self-Service Kiosk",
    description:
      "An interactive ordering interface that allows customers to browse the menu and place orders independently.",
    image: "/projects/smartsip/kiosk.png",
  },
  {
    title: "Mobile Ordering",
    description:
      "A mobile-friendly ordering experience that gives customers another convenient way to access the system.",
    image: "/projects/smartsip/mobile-ordering.png",
  },
  {
    title: "Admin Dashboard",
    description:
      "An administrative interface for managing café operations and monitoring relevant system information.",
    image: "/projects/smartsip/admin-dashboard.png",
  },
  {
    title: "Sales Forecasting",
    description:
      "A forecasting interface designed to help support business planning through sales data.",
    image: "/projects/smartsip/sales-forecasting.png",
  },
];

export default function SmartSipGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentScreenshot = screenshots[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-0 md:px-12">
      <div className="mb-10">
        <p className="mb-3 text-xs tracking-[0.2em] text-[#6B675F]">
          SYSTEM PREVIEW
        </p>

        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Inside SmartSip
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B675F]">
          Explore selected interfaces and key features of the SmartSip
          café management system.
        </p>
      </div>

      {/* Slideshow */}
      <div className="relative overflow-hidden rounded-sm border border-[#DED9CF] bg-white">
        <div className="relative aspect-video w-full bg-[#EAE7E0]">
          <Image
            key={currentScreenshot.image}
            src={currentScreenshot.image}
            alt={currentScreenshot.title}
            fill
            priority={activeIndex === 0}
            className="object-contain p-3 md:p-6"
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          {/* Previous Button */}
          <button
            onClick={previousSlide}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#DED9CF] bg-[#F4F1EA]/90 text-xl transition-all hover:bg-[#171717] hover:text-white md:left-6"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#DED9CF] bg-[#F4F1EA]/90 text-xl transition-all hover:bg-[#171717] hover:text-white md:right-6"
          >
            ›
          </button>
        </div>
      </div>

      {/* Screenshot Information */}
      <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-xs text-[#6B675F]">
            SCREEN {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(screenshots.length).padStart(2, "0")}
          </p>

          <h3 className="text-xl font-medium">
            {currentScreenshot.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-7 text-[#6B675F]">
            {currentScreenshot.description}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.title}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${screenshot.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#171717]"
                  : "w-3 bg-[#C8BBA7] hover:bg-[#6B675F]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
