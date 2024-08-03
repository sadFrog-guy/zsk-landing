import About from './components/Blocks/About'
import Header from './components/Blocks/Header'
import Hero from './components/Blocks/Hero'
import Projects from './components/Blocks/Projects'
import Services from './components/Blocks/Services'
import Carousel from './components/UI/Carousel'
import Heading from './components/UI/Heading'
import footerLogo from './assets/logo-footer.png'

function App() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full'>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>

        <div id="contacts" className='w-full h-[150px] flex items-center justify-center gap-40 footer'>
          <img src={footerLogo} className='w-[86px]' alt="" />

          <div className="flex flex-col gap-1">
            <a href="#about" className='font-helvereg text-base text-gray-500 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80'>
              О компании
            </a>
            <a href="#services" className='font-helvereg text-base text-gray-500 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80'>
              Услуги
            </a>
            <a href="#projects" className='font-helvereg text-base text-gray-500 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80'>
              Проекты
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-helvemed text-base text-gray-500 cursor-pointer leading-tight'>
              Адрес: &nbsp;
              <span className='text-custom-orange'>
                Джалал-Абадская область,
                <br />
                Джалал-Абад ул.Жамбула, дом 4
              </span>
            </p>

            <p className='font-helvemed text-base text-gray-500 cursor-pointer'>
              Номер телефона: &nbsp;
              <span className='text-custom-orange'>
                +996 (550) 142-575
              </span>
            </p>
          </div>
        </div>

        <div className='w-full h-[50px] bg-custom-darkgrey flex justify-center items-center'>
          <p className="font-helvemed text-sm text-gray-500">ОсОО &quot;Завод Специальных Коммуникаций&quot;</p>
        </div>

      </div>
    </div>
  )
}

export default App
