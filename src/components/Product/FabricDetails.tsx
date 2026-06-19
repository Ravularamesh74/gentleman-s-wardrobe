import React from 'react';

interface FabricDetail {
  name: string;
  composition: string;
  percentage?: number;
}

interface FabricDetailsProps {
  details?: FabricDetail[];
}

export const FabricDetails: React.FC<FabricDetailsProps> = ({ details = [] }) => {
  return <div className="fabric-details">{/* Fabric details implementation */}</div>;
};
