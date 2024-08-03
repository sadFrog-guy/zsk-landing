import React from 'react'
import Heading from '../UI/Heading'
import { serviceItems } from '../../utils/consts'
import ServiceItem from '../UI/ServiceItem'
import servicesBG from '../../assets/services-bg.png'

export default function Services() {
  return (
    <div id="services" className='h-screen w-full py-[35px] px-[80px] services-mobile relative'>
        <Heading variation="black">
          Услуги
        </Heading>

        <div className="flex flex-wrap justify-between gap-[35px] mt-[35px] relative z-30">
        {serviceItems.map(item => {
            return <ServiceItem
                    key={item.title}
                    title={item.title}
                    logo={item.logo}
                    text={item.text}
                    />
        })}
        </div>

        <img src={servicesBG} alt="" className="show-on-laptop absolute bottom-[70px] left-0" />
    </div>
  )
}
