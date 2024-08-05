import React from 'react'
import aboutBG from '../../assets/about-bg.png'
import Heading from '../UI/Heading'
import Carousel from './../UI/Carousel';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation()

  return (
    <div id="about" className='h-screen w-full bg-custom-gradient pt-[50px] pb-[50px] about-lower-pad'>
        <Heading variation="white">
          {t('nav1')}
        </Heading>

        <div className="flex px-[80px] gap-[40px] mt-[70px] about-mobile">
          <div className="w-1/2">
            <Carousel/>
          </div>
          <div className="w-1/2 flex flex-col gap-[30px] about-lower-gap">
              <p className="text-white font-helvemed text-base leading-snug">
                {t('about1')}
              </p>
              
              <p className="text-white font-helvereg text-base leading-snug">
                {t('about2')}
              </p>
          </div>
        </div>
    </div>
  )
}
