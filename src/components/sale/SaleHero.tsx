import React from 'react';

interface SaleHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onExplore?: () => void;
}

export const SaleHero: React.FC<SaleHeroProps> = ({ title, subtitle, backgroundImage, onExplore }) => {
  return <div className="sale-hero">{/* Sale hero implementation */}</div>;
};
