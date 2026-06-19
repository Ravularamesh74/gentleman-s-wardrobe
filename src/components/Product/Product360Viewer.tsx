import React from 'react';

interface Product360ViewerProps {
  images?: string[];
  onImageChange?: (index: number) => void;
}

export const Product360Viewer: React.FC<Product360ViewerProps> = ({ images = [], onImageChange }) => {
  return <div className="product-360-viewer">{/* 360 viewer implementation */}</div>;
};
