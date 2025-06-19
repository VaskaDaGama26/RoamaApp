import TypewriterComponent from 'typewriter-effect';
import './HeroSection.css';
import world from '/world.svg';

const HeroSection = () => {
  return (
    <section className="hero max-w-[1020px] mx-auto pt-20">
      <img className="world h-24" src={world} alt="" />
      <div className="flex flex-row items-center justify-center">
        <div className="text-5xl/tight tracking-tighter">
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
