import React from 'react';

interface BrandDiscount {
  id: string;
  brandName: string;
  logo?: string;
  discount: number;
  productCount?: number;
  featured?: boolean;
}

interface BrandDiscountsProps {
  brands?: BrandDiscount[];
  onSelectBrand?: (brandId: string) => void;
}

export const BrandDiscounts: React.FC<BrandDiscountsProps> = ({ brands = [], onSelectBrand }) => {
  return <div className="brand-discounts">{/* Brand discounts implementation */}</div>;
};
