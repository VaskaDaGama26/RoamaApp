import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const FoodPage = lazy(() => import('./pages/FoodPage/FoodPage'));
const DiningPage = lazy(() => import('./pages/DiningPage/DiningPage'));
const HotelPage = lazy(() => import('./pages/HotelPage/HotelPage'));
const PracticalPage = lazy(() => import('./pages/PracticalPage/PracticalPage'));
const HeritagePage = lazy(() => import('./pages/HeritagePage/HeritagePage'));
const FestivalsPage = lazy(() => import('./pages/FestivalsPage/FestivalsPage'));
const DirectionsPage = lazy(() => import('./pages/DirectionsPage/DirectionsPage'));
const PlacesPage = lazy(() => import('./pages/PlacesPage/PlacesPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage/FeedbackPage'));
const StoriesPage = lazy(() => import('./pages/StoriesPage/StoriesPage'));

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const search = location.search;
    if (search.startsWith('?/')) {
      const path = search.slice(2).replace(/~and~/g, '&');
      navigate('/' + path, { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* LAYOUT */}
        <Route path="/" element={<MainLayout />}>
          {/* PAGES */}
          <Route index element={<MainPage />} />
          {/* GRID */}
          <Route path="/food" element={<FoodPage />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/practical" element={<PracticalPage />} />
          <Route path="/stories" element={<StoriesPage />} />

          <Route path="/form" element={<FeedbackPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
