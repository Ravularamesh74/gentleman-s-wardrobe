import React from 'react';

interface FlashSaleBannerProps {
  discount?: number;
  endTime?: string;
  applicableProductCount?: number;
  onViewDeals?: () => void;
}

export const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({ 
  discount, 
  endTime, 
  applicableProductCount = 0, 
  onViewDeals 
}) => {
  return <div className="flash-sale-banner">{/* Flash sale banner implementation */}</div>;
};
