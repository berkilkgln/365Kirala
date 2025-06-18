import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

interface SinglePageHeaderProps {
  images: string[];
  title: string;
  descriptionDesktop: string;
  descriptionMobile: string;
  className?: string;
}

export const SinglePageHeader = ({
  images,
  title,
  descriptionDesktop,
  descriptionMobile,
}: SinglePageHeaderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-[100vw] md:w-full h-64 md:h-96 -mx-4 md:mx-0 -ml-5 md:ml-0">
      {/* Slider */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, idx) => (
            <div className="flex-[0_0_100%] h-full relative" key={idx}>
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover brightness-75"
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={85}
              />
            </div>
          ))}
        </div>
        {/* Slider Arrows */}
        {images.length > 1 && (
          <>
            <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Yazı Alanı */}
      <div className="absolute inset-0 flex flex-col justify-center p-4 text-white">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm md:text-lg text-center md:text-left mx-auto md:mx-0">
          <span className="hidden md:inline">{descriptionDesktop}</span>
          <span className="inline md:hidden">{descriptionMobile}</span>
        </p>
      </div>
    </div>
  );
};
