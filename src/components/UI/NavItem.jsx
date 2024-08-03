import React from 'react'

export default function NavItem({children, key, href, height}) {
  return (
    <a
      href={href}
      key={key}
      style={height ? {height: height + 'px'} : {}}
      className={`h-full px-[18px] transition-all duration-200 ease-linear flex justify-center items-center font-helvebold text-base text-black cursor-pointer hover:bg-custom-grey`}
    >
        {children}
    </a>
  )
}
