import React from 'react';

interface MegaDealProps {
  title?: string;
  discount?: number;
  products?: Array<{
    id: string;
    name: string;
    image: string;
    price: number;
  }>;
  onExplore?: () => void;
}

export const MegaDeal: React.FC<MegaDealProps> = ({ title, discount, products = [], onExplore }) => {
  return <div className="mega-deal">{/* Mega deal implementation */}</div>;
};
