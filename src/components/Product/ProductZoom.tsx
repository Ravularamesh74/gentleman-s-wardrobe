import React from 'react';

interface ProductZoomProps {
  imageUrl?: string;
  zoomLevel?: number;
  onZoom?: (level: number) => void;
}

export const ProductZoom: React.FC<ProductZoomProps> = ({ imageUrl, zoomLevel = 1, onZoom }) => {
  return <div className="product-zoom">{/* Product zoom implementation */}</div>;
};
