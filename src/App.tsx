import MainPage from './pages/MainPage/MainPage';
import FoodPage from './pages/FoodPage/FoodPage';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DiningPage from './pages/DiningPage/DiningPage';
import HotelPage from './pages/HotelPage/HotelPage';
import PracticalPage from './pages/PracticalPage/PracticalPage';
import HeritagePage from './pages/HeritagePage/HeritagePage';
import FestivalsPage from './pages/FestivalsPage/FestivalsPage';
import DirectionsPage from './pages/DirectionsPage/DirectionsPage';
import PlacesPage from './pages/PlacesPage/PlacesPage';
import FeedbackPage from './pages/FeedbackPage/FeedbackPage';
import StoriesPage from './pages/StoriesPage/StoriesPage';

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
          <Route path="food/" element={<FoodPage />} />
          <Route path="hotel/" element={<HotelPage />} />
          <Route path="dining/" element={<DiningPage />} />
          <Route path="festivals/" element={<FestivalsPage />} />
          <Route path="directions/" element={<DirectionsPage />} />
          <Route path="places/" element={<PlacesPage />} />
          <Route path="heritage/" element={<HeritagePage />} />
          <Route path="practical/" element={<PracticalPage />} />
          <Route path="stories/" element={<StoriesPage />} />

          <Route path="form/" element={<FeedbackPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
