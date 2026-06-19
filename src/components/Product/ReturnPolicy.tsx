import React from 'react';

interface ReturnPolicyProps {
  days?: number;
  conditions?: string[];
}

export const ReturnPolicy: React.FC<ReturnPolicyProps> = ({ days = 30, conditions = [] }) => {
  return <div className="return-policy">{/* Return policy implementation */}</div>;
};
