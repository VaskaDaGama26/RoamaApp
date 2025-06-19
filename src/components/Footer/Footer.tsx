import './Footer.css';
import logoKV from '/greenLogoKV.png';
import footerLOGO from '/ROAMA-footer.svg';

import Telegram from './icons/tg.svg?react';
import Youtube from './icons/yt.svg?react';
import VKontakte from './icons/vk.svg?react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer h-fit px-3 pt-[60px] pb-5">
      <div className="max-w-[1020px] flex flex-col gap-[60px] mx-auto tracking-tighter">
        <div className="flex flex-row justify-center sm:justify-start">
          {/* LOGO */}
          <Link to="/">
            <img className="w-fit h-[40px]" src={footerLOGO} alt="" />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col-reverse items-center gap-4 sm:gap-0 sm:flex-row justify-between pb-5">
            <a href="#" className="text-white text-sm/tight sm:text-lg/tight font-normal">
              Политика конфиденциальности
            </a>
            <div className="flex flex-row gap-2.5">
              <a className="cursor-pointer" href="#">
                <VKontakte className="transition-all duration-300 hover:-translate-y-1 group hover:[&_path.vk-path]:fill-[url(#icon-gradient)]" />
              </a>
              <a className="cursor-pointer" href="#">
                <Telegram className="transition-all duration-300 hover:-translate-y-1 group hover:[&_path.telegram-path]:fill-[url(#icon-gradient)]" />
              </a>
              <a className="cursor-pointer" href="#">
                <Youtube className="transition-all duration-300 hover:-translate-y-1 group hover:[&_path.youtube-path]:fill-[url(#icon-gradient)]" />
              </a>
            </div>
          </div>
          <hr className="border-(--gray)" />
          <div className="flex flex-row items-center justify-between pt-4">
            <p className="text-xs/tight sm:text-base/tight font-normal text-(--gray)">
              Разработка: Кириченко Василий
            </p>
            <a target="_blank" href="https://t.me/vaskadagamaa26">
              <img
                className="h-[30px] rounded-full duration-300 transform hover:-translate-y-1"
                src={logoKV}
                alt="Developed by Vasiliy Kirichenko"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
