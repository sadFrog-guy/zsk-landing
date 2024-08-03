import heroBG from '../../assets/hero-bg.png'
import smallBG from '../../assets/small-bg.png'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Hero() {
  const query = useMediaQuery("(min-width: 360px) and (max-width: 500px)")

  return (
    <div className="h-[88vh] w-full relative flex justify-center items-center hero-adaptive overflow-hidden">
        <div className="font-days text-white relative z-40 text-center hero-lower-fonts">
        <h1 className="text-3xl mb-[18px]">Завод Специальных Коммуникаций</h1>
        <h2 className="text-2xl mb-[20px]">
            Ваш партнёр в <span className="text-custom-orange">инженерных</span> решениях
        </h2>
        <h3 className='text-l text-custom-darkgrey mb-[50px]'>
            Проектирование, оснащение и монтаж
            <br />
            инженерных систем любой сложности
        </h3>

        <a href="#about" className="rounded-3xl bg-custom-orange font-helvebold px-[50px] py-[10px] transition-all duration-200 ease-linear hover:bg-white hover:text-custom-orange">
            Узнать больше
        </a>
        </div>
        
        <div className="bg-black opacity-85 absolute bottom-0 left-0 h-full w-full z-30"/>
        <img src={query ? smallBG : heroBG} className={`w-full absolute bottom-0 left-0 z-20`} alt="" />
    </div>
  )
}
