import React from 'react'
import Heading from '../UI/Heading'
import ServiceItem from '../UI/ServiceItem'
import servicesBG from '../../assets/services-bg.png'
import { useTranslation } from 'react-i18next'
import pipeIcon from '../../assets/pipe.png'
import pressureIcon from '../../assets/pressure-gauge.png'
import radiatorIcon from '../../assets/radiator.png'
import filterIcon from '../../assets/filter.png'
import settingIcon from '../../assets/setting.png'

export default function Services() {
  const { t } = useTranslation();

  const serviceItems = [
    {
      title: t('services.pipeInstallation.title'),
      logo: pipeIcon,
      text: t('services.pipeInstallation.text'),
    },
    {
      title: t('services.vacuumLines.title'),
      logo: pressureIcon,
      text: t('services.vacuumLines.text'),
    },
    {
      title: t('services.heatExchangeUnits.title'),
      logo: radiatorIcon,
      text: t('services.heatExchangeUnits.text'),
    },
    {
      title: t('services.scrubbers.title'),
      logo: filterIcon,
      text: t('services.scrubbers.text'),
    },
    {
      title: t('services.componentsSupply.title'),
      logo: settingIcon,
      text: t('services.componentsSupply.text'),
    }
  ];

  return (
    <div id="services" className='h-screen w-full py-[35px] px-[80px] services-mobile relative'>
        <Heading variation="black">
          {t('nav2')}
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
