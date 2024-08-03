import logoMini from '../../assets/logo-mini.png'
import {navItems} from '../../utils/consts';
import BurgerMenu from '../UI/BurgerMenu';
import NavItem from '../UI/NavItem';

export default function Header() {
  return (
    <header className='w-full h-[12vh] sticky top-0 left-0 z-50 limit-x bg-white flex justify-between items-center header-mobile border-b-2 border-solid border-custom-orange'>
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
