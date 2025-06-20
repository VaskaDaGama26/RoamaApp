interface Props {
  heading: string;
  description: string;
}

const HeroSection = ({ heading, description }: Props) => {
  return (
    <section className="flex px-2.5 lg:px-0 mb-10 flex-col gap-5 items-start justify-center tracking-tighter">
      <h1 className="text-2xl sm:text-5xl font-semibold">{heading}</h1>
      <p className="text-sm/tight sm:text-base/tight">{description}</p>
    </section>
  );
};

export default HeroSection;
