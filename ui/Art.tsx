import Image from 'next/image';

export default function Art({
  src,
  alt,
  size,
  rounded,
}: {
  src: string;
  alt: string;
  size: number;
  rounded?: boolean;
}) {
  return (
    <div className="relative overflow-visible">
      <Image
        src={src}
        alt=""
        className={`absolute blur-md opacity-60 ${rounded && 'rounded-full'}`}
        width={size}
        height={size}
      />
      <Image
        src={src}
        alt={alt}
        className={`relative z-10 ${rounded && 'rounded-full'}`}
        width={size}
        height={size}
      />
    </div>
  );
}
