import React from 'react';

interface ProductInfoProps {
  title?: string;
  rating?: number;
  reviews?: number;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ title, rating, reviews }) => {
  return <div className="product-info">{/* Info implementation */}</div>;
};
