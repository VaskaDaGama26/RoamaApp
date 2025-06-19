import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import MarqueeComp from '../components/Marquee/MarqueeComp';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <MarqueeComp />
      <Footer />
    </>
  );
};

export default MainLayout;
