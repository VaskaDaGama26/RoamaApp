import TypewriterComponent from 'typewriter-effect';
import './WelcomeSection.css';
import world from '/icons/hero/world.svg';
import traveller from '/icons/hero/traveler.svg';

const WelcomeSection = () => {
  return (
    <section className="hero max-w-[1020px] mx-auto my-20 px-2.5 lg:px-0 relative">
      {/* World */}
      <img className="world mb-5 lg:mb-0 h-20 sm:h-28" src={world} aria-hidden="true" alt="" />
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="text-2xl/tight sm:text-5xl/tight text-center font-semibold tracking-tighter">
          <TypewriterComponent
            options={{
              strings: ['Открой мир вместе с ROAMA', 'Путешествуй по-новому'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-sm/tight sm:text-base/tight text-center tracking-tight">
          Твоё приключение начинается здесь — среди дорог, ветра и горизонтов
        </p>
      </div>
      {/* Traveller */}
      <div className="absolute right-[10px] translate-y-[20px] group h-fit ">
        <img
          className="h-20 sm:h-28 transition-transform duration-300 group-hover:translate-y-[60px]"
          src={traveller}
          aria-hidden="true"
          alt=""
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
