import TypewriterComponent from 'typewriter-effect';
import './WelcomeSection.css';
import world from '/static/icons/hero/world.svg';
import traveller from '/static/icons/hero/traveler.svg';

const WelcomeSection = () => {
  return (
    <>
      <link rel="preload" fetchPriority="high" as="image" href={world} type="image/svg+xml" />
      <section className="hero relative mx-auto mt-12 mb-20 max-w-[1020px] px-2.5 lg:px-0">
        {/* World */}
        <img
          data-testid="world-img"
          className="world mb-5 h-20 w-fit sm:h-28 lg:mb-0"
          src={world}
          aria-hidden="true"
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-center text-2xl/tight font-semibold sm:text-5xl/tight">
            <TypewriterComponent
              options={{
                strings: ['Открой мир вместе с ROAMA', 'Путешествуй по-новому'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-center text-sm/tight tracking-tight sm:text-base/tight">
            Твоё приключение начинается здесь — среди дорог, ветра и горизонтов
          </p>
        </div>
        {/* Traveller */}
        <div className="group absolute right-[10px] h-fit translate-y-[20px]">
          <img
            data-testid="traveller-img"
            className="h-20 w-fit transition-transform duration-300 group-hover:translate-y-[60px] sm:h-28"
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
