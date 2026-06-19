import React from 'react';

interface ProductGalleryProps {
  images?: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images = [] }) => {
  return <div className="product-gallery">{/* Gallery implementation */}</div>;
};
