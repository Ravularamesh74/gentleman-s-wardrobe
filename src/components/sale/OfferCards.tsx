import React from 'react';

interface OfferCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  discount?: number;
  badge?: string;
}

interface OfferCardsProps {
  offers?: OfferCard[];
}

export const OfferCards: React.FC<OfferCardsProps> = ({ offers = [] }) => {
  return <div className="offer-cards">{/* Offer cards implementation */}</div>;
};
