import React from 'react';

interface Coupon {
  code: string;
  discount: number;
  description: string;
  expiryDate?: string;
}

interface CouponCardProps {
  coupons?: Coupon[];
  onApplyCoupon?: (code: string) => void;
}

export const CouponCard: React.FC<CouponCardProps> = ({ coupons = [], onApplyCoupon }) => {
  return <div className="coupon-card">{/* Coupon card implementation */}</div>;
};
