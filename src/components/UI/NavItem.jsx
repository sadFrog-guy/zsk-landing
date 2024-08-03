import React from 'react'

export default function NavItem({children, key, href}) {
  return (
    <a href={href} key={key} className="h-full px-[18px] transition-all duration-200 ease-linear flex justify-center items-center font-helvebold text-base text-black cursor-pointer hover:bg-custom-grey">
        {children}
    </a>
  )
}
