import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import MarqueeComp from '../components/Marquee/MarqueeComp';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="my-[76px]">
        <Outlet />
      </main>
      <MarqueeComp />
      <Footer />
    </>
  );
};

export default MainLayout;
