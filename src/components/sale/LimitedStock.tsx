import React from 'react';

interface LimitedStockProduct {
  id: string;
  name: string;
  image: string;
  stock: number;
  soldToday: number;
  price: number;
}

interface LimitedStockProps {
  products?: LimitedStockProduct[];
  onHurryBuy?: (productId: string) => void;
}

export const LimitedStock: React.FC<LimitedStockProps> = ({ products = [], onHurryBuy }) => {
  return <div className="limited-stock">{/* Limited stock implementation */}</div>;
};
