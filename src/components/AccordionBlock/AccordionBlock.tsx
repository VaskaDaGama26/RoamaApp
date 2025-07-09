import { useState } from 'react';

type AccordionData = {
  title: string;
  text: string;
};

type AccordionBlockProps = {
  data: AccordionData[];
};

const AccordionBlock = ({ data }: AccordionBlockProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="list-none flex flex-col gap-4 w-full mx-auto">
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li
            key={index}
            className="rounded-xl border border-neutral-300 overflow-hidden shadow-md bg-white transition-all duration-300"
          >
            <button
              onClick={() => handleClick(index)}
              className="w-full cursor-pointer flex justify-between items-center px-6 py-4 text-left text-purple-700 font-semibold text-base sm:text-lg hover:bg-purple-50 transition-colors"
            >
              {item.title}
              <span className="text-xl">{isOpen ? '−' : '+'}</span>
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
              }`}
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AccordionBlock;
