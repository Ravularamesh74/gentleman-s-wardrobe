import React from 'react';

interface DiscountBannerProps {
  discount?: number;
  title?: string;
  description?: string;
  ctaText?: string;
  onCTA?: () => void;
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({ 
  discount, 
  title, 
  description, 
  ctaText, 
  onCTA 
}) => {
  return <div className="discount-banner">{/* Discount banner implementation */}</div>;
};
