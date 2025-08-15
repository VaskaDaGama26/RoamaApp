import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import { Helmet } from 'react-helmet';

interface Props {
  heading: string;
  description?: string;
  testId?: string;
}

const HeroSection = ({ heading, description, testId }: Props) => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content={heading} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section className="flex px-2.5 lg:px-0 mb-10 flex-col gap-5 items-start justify-center">
        <AnimatedTitle title={heading} testId={testId} />
        <p data-testid="hero-description" className="text-sm/tight sm:text-base/tight">
          {description}
        </p>
      </section>
    </>
  );
};

export default HeroSection;
