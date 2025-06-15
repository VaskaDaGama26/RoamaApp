import React from 'react';

interface MarqueeLabelProps {
  label: string;
  left: string;
  right: string;
}

const MarqueeLabel: React.FC<MarqueeLabelProps> = ({ label, left, right }) => {
  return (
    <div className="flex flex-row items-center gap-2 pe-4">
      <img className="h-fit mt-1" src={left} alt="Arrow Left" />
      <p>{label}</p>
      <img className="h-fit mt-1" src={right} alt="Arrow Right" />
    </div>
  );
};

export default MarqueeLabel;
