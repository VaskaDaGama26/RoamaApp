import { useState } from 'react';
import type { DiningPlace } from '../types';
import rawDiningData from '../diningData.json';
import './ContinentFilter.css';

const diningData = rawDiningData as DiningPlace[];

const ContinentFilter = () => {
  const [activeContinent, setActiveContinent] = useState<string | null>(null);
  const allContinents: string[] = Array.from(new Set(diningData.map((item) => item.continent)));

  const filteredData = activeContinent
    ? diningData.filter((item) => item.continent === activeContinent)
    : diningData;

  return (
    <div className="w-full max-w-5xl mx-auto p-2.5 sm:p-4">
      <div className="flex flex-wrap gap-2 justify-start mb-4">
        {/* All diners */}
        <button
          onClick={() => setActiveContinent(null)}
          className={`px-4 py-1.5 cursor-pointer rounded-full border text-sm font-medium transition ${
            activeContinent === null
              ? 'bg-(--purple) text-white border-(--purple)'
              : 'bg-white text-gray-700 border-gray-300 hover:border-(--purpleHover)'
          }`}
        >
          Все
        </button>
        {/* Continent diners */}
        {allContinents.map((continent) => (
          <button
            key={continent}
            onClick={() => setActiveContinent(continent === activeContinent ? null : continent)}
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

      <div className="grid2 gap-4 sm:grid-cols-2">
        {filteredData.map(({ title, city, desc, bill, link }) => (
          <article
            key={title}
            className="flex flex-col justify-between duration-300 bg-(--bg-neutral) hover:bg-(--bg-neutralHover) shadow rounded-xl p-4 tracking-tighter"
          >
            <a className="cursor-pointer" target="_blank" rel="noopener noreferrer" href={link}>
              <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-1">{city}</p>
              <p className="hidden sm:block text-sm text-neutral-900 my-2">{desc}</p>
              <p className="text-sm sm:text-base font-medium text-gray-900">≈ ${bill}</p>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ContinentFilter;
