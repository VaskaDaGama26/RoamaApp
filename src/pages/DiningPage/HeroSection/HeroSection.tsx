import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex px-2.5 lg:px-0 mb-10 flex-col gap-5 items-start justify-center tracking-tighter">
      <h1 className="text-2xl sm:text-5xl font-semibold">Знаменитые заведения мира</h1>
      <p className="text-sm/tight sm:text-base/tight">
        Исторические бары, культовые кофейни и атмосферные рестораны
      </p>
    </section>
  );
};

export default HeroSection;
