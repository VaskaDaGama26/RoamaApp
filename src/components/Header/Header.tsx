import logo from '/ROAMA.svg';
import turn from '/icons/header/turn_right.svg';
import message from '/icons/header/message.svg';
import menu from '/icons/header/menu.svg';
import './Header.css';

const Header = () => {
  const handleStart = () => {
    const element = document.getElementById('grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header sticky z-20 top-5 max-w-[482px] mx-auto flex rounded-2xl flex-row items-center">
      <div className="text-lg/tight tracking-tighter font-medium w-full h-14 sm:mx-0 mx-2.5 px-5 flex flex-row justify-between items-center">
        {/* LOGO */}
        <img className="h-9" src={logo} alt="Roama" />
        {/* NAV */}
        <nav className="sm:contents sm:relative hidden absolute">
          <div className="start_travel flex flex-row items-center gap-1.5 cursor-pointer">
            <img className="h-[18px]" src={turn} alt="" />
            <button className="cursor-pointer" onClick={handleStart}>
              Исследовать
            </button>
          </div>
          <div className="message flex flex-row items-end gap-1.5 cursor-pointer rounded-lg">
            <img className="h-[18px]" src={message} alt="" />
            <a href="#">Будь в курсе</a>
          </div>
        </nav>
        {/* MENU ICON (MOBILE */}
        <img className="sm:hidden block" src={menu} alt="Menu" />
      </div>
    </header>
  );
};

export default Header;
