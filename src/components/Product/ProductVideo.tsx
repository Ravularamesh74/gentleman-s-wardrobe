import React from 'react';

interface ProductVideoProps {
  videoUrl?: string;
  thumbnail?: string;
  onPlay?: () => void;
}

export const ProductVideo: React.FC<ProductVideoProps> = ({ videoUrl, thumbnail, onPlay }) => {
  return <div className="product-video">{/* Product video implementation */}</div>;
};
