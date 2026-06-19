import React from 'react';

interface ProductFeaturesProps {
  features?: string[];
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features = [] }) => {
  return <div className="product-features">{/* Features implementation */}</div>;
};
