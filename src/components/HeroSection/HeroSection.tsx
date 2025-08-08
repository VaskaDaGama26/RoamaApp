import AnimatedTitle from './AnimatedTitle/AnimatedTitle';

interface Props {
  heading: string;
  description: string;
  testId?: string;
}

const HeroSection = ({ heading, description, testId }: Props) => {
  return (
    <section className="flex px-2.5 lg:px-0 mb-10 flex-col gap-5 items-start justify-center">
      <AnimatedTitle title={heading} testId={testId} />
      <p data-testid="hero-description" className="text-sm/tight sm:text-base/tight">
        {description}
      </p>
    </section>
  );
};

export default HeroSection;
