import { useState } from 'react';

type AccordionData = {
  title: string;
  text: string;
};

type AccordionBlockProps = {
  data: AccordionData[];
  defaultOpenIndex?: number | null;
};

const AccordionBlock = ({ data, defaultOpenIndex = 0 }: AccordionBlockProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="mx-auto flex w-full list-none flex-col gap-4">
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li
            key={index}
            className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-md transition-all duration-300"
          >
            <button
              onClick={() => handleClick(index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-purple-700 transition-colors hover:bg-purple-50 sm:text-lg"
            >
              {item.title}
              <span className="text-xl">{isOpen ? '−' : '+'}</span>
            </button>

            <div
              data-testid={`accordion-content-${index}`}
              className={`overflow-hidden px-6 transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
              }`}
            >
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AccordionBlock;
