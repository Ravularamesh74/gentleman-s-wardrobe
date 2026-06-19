import React from 'react';

interface ShareProductProps {
  productUrl?: string;
  productTitle?: string;
  onShare?: (platform: string) => void;
}

export const ShareProduct: React.FC<ShareProductProps> = ({ productUrl, productTitle, onShare }) => {
  return <div className="share-product">{/* Share product implementation */}</div>;
};
