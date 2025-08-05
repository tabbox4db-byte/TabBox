import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackSrc = "/images/placeholder.png",
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative w-full aspect-[4/3] bg-gray-100 rounded overflow-hidden ${className}`}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={fallbackSrc}
            alt="placeholder"
            className="object-contain max-h-full"
          />
        </div>
      )}
    </div>
  );
}
