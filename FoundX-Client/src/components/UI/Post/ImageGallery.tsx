"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  images: string[];
}

const ImageGallery = ({ images }: IProps) => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images?.map((image, index) => (
        <Link href={image}>
          <Image src={image} height={500} width={500} alt={`image-${index}`} />
        </Link>
      ))}
    </LightGallery>
  );
};

export default ImageGallery;
