import React from 'react';

interface StockAlert {
  productId: string;
  productName: string;
  status: 'in-stock' | 'low-stock' | 'back-in-stock';
  notificationDate?: string;
}

interface StockAlertsProps {
  alerts?: StockAlert[];
  onViewProduct?: (productId: string) => void;
  onNotifyMe?: (productId: string) => void;
}

export const StockAlerts: React.FC<StockAlertsProps> = ({ 
  alerts = [], 
  onViewProduct, 
  onNotifyMe 
}) => {
  return <div className="stock-alerts">{/* Stock alerts implementation */}</div>;
};
