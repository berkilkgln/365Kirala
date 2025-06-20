import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

interface SinglePageHeaderProps {
  images: string[];
  title: string;
  descriptionDesktop: string;
  descriptionMobile: string;
  className?: string;
  customBadges?: Array<{
    icon: string;
    text: string;
    color: string;
  }>;
}

export const SinglePageHeader = ({
  images,
  title,
  descriptionDesktop,
  descriptionMobile,
  customBadges,
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
                className="object-cover"
                priority={idx === 0}
                loading={idx === 0 ? undefined : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={85}
              />
              {/* Enhanced Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>
          ))}
        </div>
        {/* Slider Arrows */}
        {images.length > 1 && (
          <>
            <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all duration-300 hover:scale-110">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all duration-300 hover:scale-110">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Enhanced Text Area */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 md:px-8">
          
          {/* Enhanced Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            {title}
          </h1>
          
          {/* Enhanced Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto drop-shadow-xl hidden md:block leading-relaxed font-medium text-gray-100">
              {descriptionDesktop}
            </p>
            <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto drop-shadow-xl md:hidden leading-relaxed font-medium text-gray-100">
              {descriptionMobile}
            </p>
          </div>

          {/* Additional Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {customBadges ? (
              customBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  {badge.text === "Anında Onay" ? (
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <div className={`w-2 h-2 ${badge.color} rounded-full animate-pulse`}></div>
                  )}
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))
            ) : (
              <>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">7/24 Hizmet</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-sm font-medium">VIP Transfer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Anında Onay</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
