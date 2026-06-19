import React from 'react';

interface Offer {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

interface OffersSectionProps {
  offers?: Offer[];
}

export const OffersSection: React.FC<OffersSectionProps> = ({ offers = [] }) => {
  return <div className="offers-section">{/* Offers section implementation */}</div>;
};
