import React from 'react';

interface PriceDropAlert {
  productId: string;
  productName: string;
  previousPrice: number;
  currentPrice: number;
  dropPercentage: number;
}

interface PriceDropAlertProps {
  alerts?: PriceDropAlert[];
  onNotifyMe?: (productId: string) => void;
}

export const PriceDropAlert: React.FC<PriceDropAlertProps> = ({ alerts = [], onNotifyMe }) => {
  return <div className="price-drop-alert">{/* Price drop alert implementation */}</div>;
};
