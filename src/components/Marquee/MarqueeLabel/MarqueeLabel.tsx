interface MarqueeLabelProps {
  label: string;
  icon: string;
}

const MarqueeLabel = ({ label, icon }: MarqueeLabelProps) => {
  return (
    <div className="flex flex-row items-center gap-2 pe-4">
      <img className="h-4" src={icon} alt="Icon Left" />
      <p>{label}</p>
      <img className="h-4" src={icon} alt="Icon Right" />
    </div>
  );
};

export default MarqueeLabel;
