import Image from 'next/image';

interface SinglePageHeaderProps {
  image: string;
  title: string;
  descriptionDesktop: string;
  descriptionMobile: string;
  className?: string;
}

export const SinglePageHeader = ({
  image,
  title,
  descriptionDesktop,
  descriptionMobile,
}: SinglePageHeaderProps) => {
  return (
    <div className="relative w-full h-64 md:h-96">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-75"
        priority
      />

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
