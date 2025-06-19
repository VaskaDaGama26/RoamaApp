import TypewriterComponent from 'typewriter-effect';
import './HeroSection.css';
import world from '/icons/hero/world.svg';

const HeroSection = () => {
  return (
    <section className="hero max-w-[1020px] mx-auto pt-20 px-2.5 lg:px-0">
      <img className="world mb-5 lg:mb-0 h-20 sm:h-28" src={world} alt="" />
      <div className="flex flex-row items-center justify-center">
        <div className="text-4xl/tight sm:text-5xl/tight text-center tracking-tighter">
          <TypewriterComponent
            options={{
              strings: ['Открой мир вместе с ROAMA', 'Путешествуй по-новому'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
