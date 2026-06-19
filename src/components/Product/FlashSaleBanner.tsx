import React from 'react';

interface FlashSaleBannerProps {
  discount?: number;
  endTime?: string;
  onExpired?: () => void;
}

export const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({ discount, endTime, onExpired }) => {
  return <div className="flash-sale-banner">{/* Flash sale banner implementation */}</div>;
};
