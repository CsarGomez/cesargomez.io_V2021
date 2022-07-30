import { useState } from 'react';
import { useTheme } from 'next-themes';

import Image from 'next/image';
import sun from '../public/static/icons/sun.svg';
import moon from '../public/static/icons/moon.svg';
import NavItems from './NavItems';

const menu_list = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Uses',
    href: '/uses',
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header>
      <nav className='nav'>
        <button
          className='flex items-center justify-center p-[5px] border-2 rounded-[5px] border-mine dark:border-alto'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Image
            src={theme === 'light' ? moon : sun}
            alt='switch theme button'
            width={15}
            height={15}
          />
        </button>
        <button className='nav__menu' onClick={() => setNavActive(!navActive)}>
          {navActive === true ? 'Close' : 'Menu'}
        </button>

        <div className={`${navActive ? 'active' : ''} nav__menu_items`}>
          {menu_list.map((item) => {
            return (
              <div
                className='text-black'
                key={item.text}
                onClick={() => {
                  setNavActive(false);
                }}
              >
                <NavItems href={item.href} text={item.text} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
