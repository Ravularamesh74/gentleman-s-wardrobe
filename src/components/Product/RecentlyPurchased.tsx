import React from 'react';

interface PurchaseItem {
  id: string;
  buyer?: string;
  timeAgo?: string;
  quantity?: number;
}

interface RecentlyPurchasedProps {
  purchases?: PurchaseItem[];
}

export const RecentlyPurchased: React.FC<RecentlyPurchasedProps> = ({ purchases = [] }) => {
  return <div className="recently-purchased">{/* Recently purchased implementation */}</div>;
};
