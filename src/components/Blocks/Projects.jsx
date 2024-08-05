import React, {useState} from 'react'
import Heading from './../UI/Heading'
import slide1 from '../../assets/slide.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import slide5 from '../../assets/slide5.png'
import slide6 from '../../assets/slide6.png'
import slide7 from '../../assets/slide7.png'
import slide8 from '../../assets/slide8.png'
import slide9 from '../../assets/slide9.png'
import arrowRight from '../../assets/right-chevron.png'
import { useTranslation } from 'react-i18next'

export default function Projects() {
    const { t } = useTranslation()

    const sliderPacks = [
        {
            title: t('projects1'),
            firstSlide: slide1,
            secondSlide: slide2,
            thirdSlide: slide3
        },
        {
            title: t('projects2'),
            firstSlide: slide4,
            secondSlide: slide5,
            thirdSlide: slide6
        },
        {
            title: t('projects3'),
            firstSlide: slide7,
            secondSlide: slide8,
            thirdSlide: slide9
        },
    ]

    const [index, setIndex] = useState(0)
    const [transitionValue, setTransitionValue] = useState("opacity-0")

    const handleArrowClick = () => {
        if (index === sliderPacks.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
        
        setTransitionValue("opacity-100")

        setTimeout(() => {
            setTransitionValue("opacity-0")
        }, 400)
    }

  return (
    <div id="projects" className='h-screen bg-custom-gradient py-[35px] projects-mobile'>
        <Heading variation="white">
            {t('nav3')}
        </Heading>

        <div key={sliderPacks[index].title} className="mt-[50px] flex justify-center gap-[32px] projects-mobile-blocks">
            <div className="w-[684px] h-[455px] rounded-xl relative overflow-hidden projects-big">
                <div className="absolute bottom-[20px] left-[20px] z-30 projects-title">
                    {index == 2
                        ? (
                            <h1 className='text-white font-days font-bold text-xl'>
                                {sliderPacks[index].title}
                            </h1>
                        )
                        : (
                            <h1 className='text-white font-days font-bold text-3xl'>
                                {sliderPacks[index].title}
                            </h1>
                        )
                    }
                </div>
                <img
                    onClick={handleArrowClick}
                    src={arrowRight}
                    className='size-[32px] projects-icon absolute right-[20px] bottom-[20px] z-30 cursor-pointer scale-arrow-on-hover'
                    alt=""
                />
                <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-black to-transparent"></div>
                <div className={`w-full h-full bg-black absolute transition-all ease-in-out duration-200 top-0 opacity-0 ${transitionValue}`}></div>
                <img src={sliderPacks[index].firstSlide} className='w-full h-full' alt="" />
            </div>

            <div className="flex flex-col gap-[32px]">
                <div className="w-[315px] h-[210px] relative bg-white rounded-xl overflow-hidden projects-small">
                    <div className={`w-full h-full bg-black absolute transition-all ease-in-out duration-200 top-0 opacity-0 ${transitionValue}`}></div>
                    <img src={sliderPacks[index].secondSlide} className='size-full' alt="" />
                </div>
                <div className="w-[315px] h-[210px] relative bg-white rounded-xl overflow-hidden projects-small">
                    <div className={`w-full h-full bg-black absolute transition-all ease-in-out duration-200 top-0 opacity-0 ${transitionValue}`}></div>
                    <img src={sliderPacks[index].thirdSlide} className='size-full' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
