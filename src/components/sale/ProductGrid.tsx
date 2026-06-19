import React from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
}

interface ProductGridProps {
  products?: Product[];
  columns?: number;
  onProductClick?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products = [], 
  columns = 4, 
  onProductClick, 
  onAddToCart 
}) => {
  return <div className="product-grid">{/* Product grid implementation */}</div>;
};
