import React from 'react';

interface SizeGuideProps {
  sizeChart?: Record<string, unknown>[];
  onSelectSize?: (size: string) => void;
}

export const SizeGuide: React.FC<SizeGuideProps> = ({ sizeChart = [], onSelectSize }) => {
  return <div className="size-guide">{/* Size guide implementation */}</div>;
};
