import logoMini from '../../assets/logo-mini.png'
import {navItems} from '../../utils/consts';
import NavItem from '../UI/NavItem';

export default function Header() {
  return (
    <header className='w-full h-[12vh] limit-x bg-white flex justify-between items-center header-mobile'>
        <img src={logoMini} alt="" />

        <div className="flex h-full hide-on-mobile">
          {navItems.map(item => {
            return (
              <NavItem href={item.link} key={item.title}>
                {item.title}
              </NavItem>
            )
          })}
        </div>
    </header>
  )
}
