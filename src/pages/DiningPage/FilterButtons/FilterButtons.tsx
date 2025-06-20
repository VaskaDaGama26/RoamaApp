interface Props {
  continents: string[];
  activeContinent: string | null;
  onSelect: (continent: string | null) => void;
}

const FilterButtons = ({ continents, activeContinent, onSelect }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 justify-start mb-4">
      {/* All diners */}
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-1.5 cursor-pointer rounded-full border text-sm font-medium transition ${
          activeContinent === null
            ? 'bg-(--purple) text-white border-(--purple)'
            : 'bg-white text-gray-700 border-gray-300 hover:border-(--purpleHover)'
        }`}
      >
        Все
      </button>
      {/* Continent diners */}
      {continents.map((continent) => (
        <button
          key={continent}
          onClick={() => onSelect(continent === activeContinent ? null : continent)}
          className={`px-4 py-1.5 cursor-pointer rounded-full border text-sm font-medium transition tracking-tighter ${
            activeContinent === continent
              ? 'bg-(--purple) text-white border-(--purple)'
              : 'bg-white text-gray-700 border-gray-300 hover:border-(--purpleHover)'
          }`}
        >
          {continent}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
