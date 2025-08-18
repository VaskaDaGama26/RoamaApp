import logo from '/static/ROAMA.svg';
import turn from '/static/icons/header/turn_right.svg';
import message from '/static/icons/header/message.svg';
import menu from '/static/icons/header/menu.svg';
import close from '/static/icons/header/close.svg';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = ({ initialMenuOpen = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(initialMenuOpen);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/', { state: { scrollTo: 'grid' } });
    setIsMenuOpen(false);
  };

  const handleFormClick = () => {
    navigate('/form');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header sticky top-5 z-[1001] mx-auto flex max-w-[482px] flex-row items-center rounded-2xl">
      <div className="relative mx-2.5 flex h-14 w-full flex-row items-center justify-between px-5 text-lg/tight font-medium sm:mx-0">
        {/* LOGO */}
        <Link to="/">
          <img className="h-9 w-fit transform duration-300 hover:scale-95" src={logo} alt="Roama" />
        </Link>
        {/* NAV */}
        <nav
          className={`nav ${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 right-0 h-fit w-full transform flex-col items-center justify-center gap-5 rounded-2xl p-5 sm:relative sm:contents sm:p-0`}
        >
          <div className="start_travel flex cursor-pointer flex-row items-center gap-1.5">
            <img className="h-[18px]" src={turn} alt="" />
            <button className="cursor-pointer" onClick={handleStart}>
              Исследовать
            </button>
          </div>
          <div className="message flex cursor-pointer flex-row items-end gap-1.5 rounded-lg">
            <img className="h-[18px]" src={message} alt="" />
            <button className="cursor-pointer" onClick={handleFormClick}>
              Будь в курсе
            </button>
          </div>
        </nav>
        {/* MENU ICON */}
        <button className="block sm:hidden" onClick={toggleMenu}>
          <img
            className={`ease transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}
            src={isMenuOpen ? close : menu}
            alt="Menu"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
