import logoMini from '../../assets/logo-mini.png'
import {navItems} from '../../utils/consts';
import useMediaQuery from '../hooks/useMediaQuery';
import BurgerMenu from '../UI/BurgerMenu';
import NavItem from '../UI/NavItem';

export default function Header() {
  const query = useMediaQuery("(min-width: 360px) and (max-width: 500px)")

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

        <BurgerMenu/>
    </header>
  )
}
