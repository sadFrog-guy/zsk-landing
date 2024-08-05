import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoMini from '../../assets/logo-mini.png'
import useMediaQuery from '../hooks/useMediaQuery';
import BurgerMenu from '../UI/BurgerMenu';
import NavItem from '../UI/NavItem';
import LanguageSwitch from '../UI/LanguageSwitch';

export default function Header() {
  const { t } = useTranslation()
  const query = useMediaQuery("(min-width: 360px) and (max-width: 500px)")

  const navItems = [
    {
        title: t('nav1'),
        link: '#about'
    },
    {
        title: t('nav2'),
        link: '#services'
    },
    {
        title: t('nav3'),
        link: '#projects'
    },
    {
        title: t('nav4'),
        link: '#contacts'
    },
  ]

  return (
    <header
      className={`w-full h-[12vh] z-50 limit-x bg-white flex justify-between items-center header-mobile ${query ? 'border-b-2 border-solid border-custom-orange fixed top-0 left-0' : ''}`}
    >
        <img src={logoMini} className='h-[80%]' alt="" />

        <div className="flex h-full hide-on-mobile">
          {navItems.map(item => {
            return (
              <NavItem href={item.link} key={item.title}>
                {item.title}
              </NavItem>
            )
          })}
        </div>

        {query ? <BurgerMenu navItems={navItems}/> : <LanguageSwitch/>}
    </header>
  )
}
