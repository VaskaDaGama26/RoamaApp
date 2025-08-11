import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import MarqueeComp from '../components/Marquee/MarqueeComp/MarqueeComp';
import Footer from '../components/Footer/Footer';
import { Suspense } from 'react';
import { motion } from 'motion/react';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                height: '100dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '5px solid #6e11b0',
                  borderTopColor: 'transparent',
                }}
              />
            </motion.div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <MarqueeComp />
      <Footer />
    </>
  );
};

export default MainLayout;
