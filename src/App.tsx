import MainPage from './components/MainPage/MainPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/RoamaApp/">
      <Routes>
        <Route path="" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
