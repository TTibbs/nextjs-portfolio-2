"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type ProjectCarouselProps = {
  images: string[];
  projectTitle: string;
};

export const ProjectCarousel = ({
  images,
  projectTitle,
}: ProjectCarouselProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const goToPreviousImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex - 1 + images.length) % images.length;
    });
  };

  const goToNextImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex + 1) % images.length;
    });
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (event.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImageIndex]);

  if (!images.length) return null;

  return (
    <>
      <Carousel
        className="mt-4 w-full"
        opts={{
          loop: images.length > 1,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image}>
              <Card className="overflow-hidden border-[#1e1e1e] bg-[#0f0f0f]">
                <CardContent className="p-0">
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className="relative block w-full cursor-grab active:cursor-grabbing overflow-hidden bg-black/50 focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label={`Open ${projectTitle} screenshot ${index + 1} in modal`}
                  >
                    <div className="relative aspect-16/10 w-full">
                      <Image
                        src={image}
                        alt={`${projectTitle} screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-contain object-center p-2"
                      />
                    </div>
                  </button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 ? (
          <>
            <CarouselPrevious className="left-2 border-[#2a2a2a] bg-black/70 text-white hover:bg-black/90" />
            <CarouselNext className="right-2 border-[#2a2a2a] bg-black/70 text-white hover:bg-black/90" />
          </>
        ) : null}
      </Carousel>

      {selectedImageIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot preview`}
          onClick={() => setSelectedImageIndex(null)}
        >
          {images.length > 1 ? (
            <button
              type="button"
              className="absolute left-4 z-10 rounded-full border border-white/20 bg-black/40 p-2 text-white hover:bg-black/70"
              onClick={(event) => {
                event.stopPropagation();
                goToPreviousImage();
              }}
              aria-label="Show previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          ) : null}

          {images.length > 1 ? (
            <button
              type="button"
              className="absolute right-4 z-10 rounded-full border border-white/20 bg-black/40 p-2 text-white hover:bg-black/70"
              onClick={(event) => {
                event.stopPropagation();
                goToNextImage();
              }}
              aria-label="Show next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          ) : null}

          <button
            type="button"
            className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/40 p-2 text-white hover:bg-black/70"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selectedImageIndex]}
              alt={`${projectTitle} enlarged screenshot ${selectedImageIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
