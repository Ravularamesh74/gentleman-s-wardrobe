import React from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  inStock?: boolean;
  addedDate?: string;
}

interface WishlistCardProps {
  product?: Product;
  onRemove?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({ 
  product, 
  onRemove, 
  onAddToCart, 
  onViewDetails 
}) => {
  return <div className="wishlist-card">{/* Wishlist card implementation */}</div>;
};
