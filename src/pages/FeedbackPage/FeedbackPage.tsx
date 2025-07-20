import HeroSection from '../../components/HeroSection/HeroSection';
import FeedbackForm from './FeedbackForm/FeedbackForm';

const FeedbackPage = () => {
  return (
    <div className="max-w-[1020px] mx-auto mt-12 mb-20">
      <HeroSection
        heading="Будь в курсе"
        description="Поделись своими впечатлениями и получай новости первым"
      />
      <div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackPage;
