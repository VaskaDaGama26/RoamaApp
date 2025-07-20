import logo from '/ROAMA.svg';
import turn from '/icons/header/turn_right.svg';
import message from '/icons/header/message.svg';
import menu from '/icons/header/menu.svg';
import close from '/icons/header/close.svg';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="header sticky z-[1001] top-5 max-w-[482px] mx-auto flex rounded-2xl flex-row items-center">
      <div className="relative text-lg/tight font-medium w-full h-14 sm:mx-0 mx-2.5 px-5 flex flex-row justify-between items-center">
        {/* LOGO */}
        <Link to="/">
          <img className="h-9 duration-300 transform hover:scale-95" src={logo} alt="Roama" />
        </Link>
        {/* NAV */}
        <nav
          className={`nav ${isMenuOpen ? 'flex' : 'hidden'} transform flex-col items-center gap-5 justify-center sm:contents sm:relative p-5 rounded-2xl sm:p-0 absolute w-full top-16 right-0 h-fit`}
        >
          <div className="start_travel flex flex-row items-center gap-1.5 cursor-pointer">
            <img className="h-[18px]" src={turn} alt="" />
            <button className="cursor-pointer" onClick={handleStart}>
              Исследовать
            </button>
          </div>
          <div className="message flex flex-row items-end gap-1.5 cursor-pointer rounded-lg">
            <img className="h-[18px]" src={message} alt="" />
            <button className="cursor-pointer" onClick={handleFormClick}>
              Будь в курсе
            </button>
          </div>
        </nav>
        {/* MENU ICON */}
        <button className="block sm:hidden" onClick={toggleMenu}>
          <img
            className={`transition-transform duration-300 ease ${
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
