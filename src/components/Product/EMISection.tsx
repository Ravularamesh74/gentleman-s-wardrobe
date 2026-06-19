import React from 'react';

interface EMIOption {
  months: number;
  monthlyAmount: number;
  totalAmount: number;
}

interface EMISectionProps {
  emiOptions?: EMIOption[];
  onSelectEMI?: (option: EMIOption) => void;
}

export const EMISection: React.FC<EMISectionProps> = ({ emiOptions = [], onSelectEMI }) => {
  return <div className="emi-section">{/* EMI section implementation */}</div>;
};
