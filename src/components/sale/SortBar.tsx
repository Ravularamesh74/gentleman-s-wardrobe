import React from 'react';

interface SortOption {
  label: string;
  value: string;
}

interface SortBarProps {
  sortOptions?: SortOption[];
  currentSort?: string;
  onSortChange?: (sortValue: string) => void;
}

export const SortBar: React.FC<SortBarProps> = ({ 
  sortOptions = [], 
  currentSort, 
  onSortChange 
}) => {
  return <div className="sort-bar">{/* Sort bar implementation */}</div>;
};
