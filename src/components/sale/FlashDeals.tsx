import React from 'react';

interface FlashDeal {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  stock: number;
}

interface FlashDealsProps {
  deals?: FlashDeal[];
  onAddToCart?: (dealId: string) => void;
}

export const FlashDeals: React.FC<FlashDealsProps> = ({ deals = [], onAddToCart }) => {
  return <div className="flash-deals">{/* Flash deals implementation */}</div>;
};
