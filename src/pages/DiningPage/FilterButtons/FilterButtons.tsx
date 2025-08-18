interface Props {
  continents: string[];
  activeContinent: string | null;
  onSelect: (continent: string | null) => void;
}

const FilterButtons = ({ continents, activeContinent, onSelect }: Props) => {
  return (
    <div className="mb-4 flex flex-wrap justify-start gap-2">
      {/* All diners */}
      <button
        onClick={() => onSelect(null)}
        className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition ${
          activeContinent === null
            ? 'border-(--purple) bg-(--purple) text-white'
            : 'border-gray-300 bg-white text-gray-700 hover:border-(--purpleHover)'
        }`}
      >
        Все
      </button>
      {/* Continent diners */}
      {continents.map((continent) => (
        <button
          key={continent}
          onClick={() => onSelect(continent === activeContinent ? null : continent)}
          className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            activeContinent === continent
              ? 'border-(--purple) bg-(--purple) text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:border-(--purpleHover)'
          }`}
        >
          {continent}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
