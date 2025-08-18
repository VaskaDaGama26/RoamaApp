import './Footer.css';
import logoKV from '/static/greenLogoKV.png';
import footerLOGO from '/static/ROAMA-footer.svg';

import Telegram from './icons/tg.svg?react';
import Youtube from './icons/yt.svg?react';
import VKontakte from './icons/vk.svg?react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer h-fit px-3 pt-[60px] pb-5">
      <div className="mx-auto flex max-w-[1020px] flex-col gap-[60px]">
        <div className="flex flex-row justify-center sm:justify-start">
          {/* LOGO */}
          <Link to="/">
            <img
              className="h-[40px] w-fit transform duration-300 hover:scale-95"
              src={footerLOGO}
              alt="RoamaApp Logo"
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col-reverse items-center justify-between gap-4 pb-5 sm:flex-row sm:gap-0">
            <div className="flex max-w-xl flex-col gap-4">
              <a href="#" className="text-sm/tight font-normal text-white sm:text-lg/tight">
                Политика конфиденциальности
              </a>
              <a
                target="_blank"
                href="https://t.me/vaskadagamaa26"
                className="text-xs/relaxed font-normal text-(--gray) sm:text-sm/relaxed"
              >
                Сайт носит некоммерческий характер. Все материалы принадлежат их правообладателям и
                используются исключительно в информационных целях. По вопросам удаления контента вы
                можете связаться со мной.
              </a>
            </div>
            <div className="flex flex-row gap-2.5">
              <a className="cursor-pointer" href="#" aria-label="VKontakte">
                <VKontakte className="group transition-all duration-300 hover:-translate-y-1 hover:[&_path.vk-path]:fill-[url(#icon-gradient)]" />
              </a>
              <a className="cursor-pointer" href="#" aria-label="Telegram">
                <Telegram className="group transition-all duration-300 hover:-translate-y-1 hover:[&_path.telegram-path]:fill-[url(#icon-gradient)]" />
              </a>
              <a className="cursor-pointer" href="#" aria-label="Youtube">
                <Youtube className="group transition-all duration-300 hover:-translate-y-1 hover:[&_path.youtube-path]:fill-[url(#icon-gradient)]" />
              </a>
            </div>
          </div>
          <hr className="border-(--gray)" />
          <div className="flex flex-row items-center justify-between pt-4">
            <p className="text-xs/tight font-normal text-(--gray) sm:text-base/tight">
              Разработка: Кириченко Василий
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/vaskadagamaa26">
              <img
                className="h-8 w-8 transform rounded-full duration-300 hover:-translate-y-1"
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
