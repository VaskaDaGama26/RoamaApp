interface Props {
  heading: string;
  description: string;
  testId?: string;
}

const HeroSection = ({ heading, description, testId }: Props) => {
  return (
    <section className="flex px-2.5 lg:px-0 mb-10 flex-col gap-5 items-start justify-center">
      <h1 data-testid={`hero-heading-${testId}`} className="text-2xl sm:text-5xl font-semibold">
        {heading}
      </h1>
      <p data-testid="hero-description" className="text-sm/tight sm:text-base/tight">
        {description}
      </p>
    </section>
  );
};

export default HeroSection;
