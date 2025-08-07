import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import MarqueeComp from '../components/Marquee/MarqueeComp/MarqueeComp';
import Footer from '../components/Footer/Footer';
import { Suspense } from 'react';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <MarqueeComp />
      <Footer />
    </>
  );
};

export default MainLayout;
