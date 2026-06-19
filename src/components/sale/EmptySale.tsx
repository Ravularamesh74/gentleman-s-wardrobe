import React from 'react';

interface EmptySaleProps {
  onContinueShopping?: () => void;
  onBrowseDeals?: () => void;
}

export const EmptySale: React.FC<EmptySaleProps> = ({ onContinueShopping, onBrowseDeals }) => {
  return <div className="empty-sale">{/* Empty sale state implementation */}</div>;
};
