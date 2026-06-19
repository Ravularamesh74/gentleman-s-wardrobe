import React from 'react';

interface LiveViewerCounterProps {
  count?: number;
}

export const LiveViewerCounter: React.FC<LiveViewerCounterProps> = ({ count = 0 }) => {
  return <div className="live-viewer-counter">{/* Live viewer counter implementation */}</div>;
};
