import React from 'react';

interface SocialShareProps {
  wishlistUrl?: string;
  onShareFacebook?: () => void;
  onShareTwitter?: () => void;
  onShareWhatsApp?: () => void;
  onShareEmail?: () => void;
  onCopyLink?: () => void;
}

export const SocialShare: React.FC<SocialShareProps> = ({ 
  wishlistUrl, 
  onShareFacebook, 
  onShareTwitter, 
  onShareWhatsApp, 
  onShareEmail, 
  onCopyLink 
}) => {
  return <div className="social-share">{/* Social share implementation */}</div>;
};
