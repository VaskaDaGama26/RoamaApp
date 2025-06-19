import MainPage from './pages/MainPage/MainPage';
import FoodPage from './pages/FoodPage/FoodPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router basename="/RoamaApp/">
      <Routes>
        {/* LAYOUT */}
        <Route path="/" element={<MainLayout />}>
        {/* PAGES */}
          <Route index element={<MainPage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
