import React from 'react';

interface ProductPriceProps {
  price?: number;
  originalPrice?: number;
  discount?: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price, originalPrice, discount }) => {
  return <div className="product-price">{/* Price implementation */}</div>;
};
