import React from 'react';

interface BundleItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface FrequentlyBoughtTogetherProps {
  items?: BundleItem[];
  onBuyBundle?: (itemIds: string[]) => void;
}

export const FrequentlyBoughtTogether: React.FC<FrequentlyBoughtTogetherProps> = ({ items = [], onBuyBundle }) => {
  return <div className="frequently-bought-together">{/* Frequently bought together implementation */}</div>;
};
