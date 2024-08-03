import React from 'react'
import aboutBG from '../../assets/about-bg.png'
import Heading from '../UI/Heading'
import Carousel from './../UI/Carousel';

export default function About() {
  return (
    <div id="about" className='h-screen w-full bg-custom-gradient pt-[50px] pb-[50px] about-lower-pad'>
        <Heading variation="white">
            О компании
        </Heading>

        <div className="flex px-[80px] gap-[40px] mt-[70px] about-mobile">
          <div className="w-1/2">
            <Carousel/>
          </div>
          <div className="w-1/2 flex flex-col gap-[30px] about-lower-gap">
              <p className="text-white font-helvemed text-base leading-snug">
              Компания «ЗСК» - Завод Специальных Коммуникаций – высокотехнологичная инжиниринговая компания, занимающаяся проектированием, оснащением и монтажом инженерных коммуникаций, необходимых для функционирования современного производства. Компания имеет в своем штате высококлассных специалистов, способных успешно решать профильные задачи на самом высоком инженерно-технологическом уровне.
              </p>
              
              <p className="text-white font-helvereg text-base leading-snug">
              Компания была открыта в г. Джалал-Абаде, хорошо известным своим курортом с минеральными источниками и лечебными грязями. Курорт является известным в странах бывшего СССР и ежегодно там проходят лечение тысячи человек. В городе проживают много квалифицированных специалистов, связанных по своему профилю с медициной, пищевой и химической промышленностью, и наша компания планирует расширение своего бизнеса, используя богатый опыт местных специалистов и опираясь на современные технологии и материалы.
              </p>
          </div>
        </div>
    </div>
  )
}
