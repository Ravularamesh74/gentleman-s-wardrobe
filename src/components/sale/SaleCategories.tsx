import React from 'react';

interface Category {
  id: string;
  name: string;
  icon?: string;
  discount?: number;
}

interface SaleCategoriesProps {
  categories?: Category[];
  onSelectCategory?: (categoryId: string) => void;
}

export const SaleCategories: React.FC<SaleCategoriesProps> = ({ categories = [], onSelectCategory }) => {
  return <div className="sale-categories">{/* Sale categories implementation */}</div>;
};
