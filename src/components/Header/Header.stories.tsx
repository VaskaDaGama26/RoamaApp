import Header from './Header';
import '../../index.css';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
};

export const Default = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export const MobileDefault = {
  render: () => (
    <Router>
      <Header />
    </Router>
  ),
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

export const MobileMenu = {
  render: () => (
    <Router>
      <Header initialMenuOpen={true} />
    </Router>
  ),
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};
