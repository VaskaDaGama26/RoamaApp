import TypewriterComponent from 'typewriter-effect';
import './WelcomeSection.css';
import world from '/static/icons/hero/world.svg';
import traveller from '/static/icons/hero/traveler.svg';

const WelcomeSection = () => {
  return (
    <>
      <link rel="preload" fetchPriority="high" as="image" href={world} type="image/svg+xml" />
      <section className="hero max-w-[1020px] mx-auto mt-12 mb-20 px-2.5 lg:px-0 relative">
        {/* World */}
        <img
          data-testid="world-img"
          className="world mb-5 lg:mb-0 w-fit h-20 sm:h-28"
          src={world}
          aria-hidden="true"
          alt=""
        />
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="text-2xl/tight sm:text-5xl/tight text-center font-semibold">
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
            data-testid="traveller-img"
            className="w-fit h-20 sm:h-28 transition-transform duration-300 group-hover:translate-y-[60px]"
            src={traveller}
            aria-hidden="true"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
