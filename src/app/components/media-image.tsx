"use client";

import Image from "next/image";
import { useState } from "react";
import { cld } from "@/utils/cloudinary";

interface MediaImageProps {
  src: string;
  alt: string;
  /** Cover the (relatively-positioned) parent. */
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Cloudinary source width cap (origin bytes), independent of render size. */
  cldWidth?: number;
}

/**
 * next/image wrapper that (1) optimises Cloudinary sources via `cld()` and
 * (2) shows a skeleton shimmer until the image loads, then fades it in —
 * removing the blank/pop layout shift. The caller must position the parent
 * (e.g. `relative h-48`) when using `fill`.
 */
export default function MediaImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className = "",
  cldWidth,
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span
        aria-hidden
        className={`absolute inset-0 img-skeleton transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={cld(src, cldWidth)}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={className}
      />
    </>
  );
}
