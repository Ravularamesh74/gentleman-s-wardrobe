import React from 'react';

interface Deal {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  badge?: string;
}

interface TopDealsProps {
  deals?: Deal[];
  onViewDeal?: (dealId: string) => void;
}

export const TopDeals: React.FC<TopDealsProps> = ({ deals = [], onViewDeal }) => {
  return <div className="top-deals">{/* Top deals implementation */}</div>;
};
