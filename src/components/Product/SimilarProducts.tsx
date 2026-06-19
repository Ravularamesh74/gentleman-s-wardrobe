import React from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating?: number;
}

interface SimilarProductsProps {
  products?: Product[];
}

export const SimilarProducts: React.FC<SimilarProductsProps> = ({ products = [] }) => {
  return <div className="similar-products">{/* Similar products implementation */}</div>;
};
