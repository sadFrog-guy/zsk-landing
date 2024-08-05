import About from './components/Blocks/About'
import Header from './components/Blocks/Header'
import Hero from './components/Blocks/Hero'
import Projects from './components/Blocks/Projects'
import Services from './components/Blocks/Services'
import Carousel from './components/UI/Carousel'
import Heading from './components/UI/Heading'
import footerLogo from './assets/logo-footer.png'
import { Trans, useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

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
              {t('nav1')}
            </a>
            <a href="#services" className='font-helvereg text-base text-gray-500 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80'>
              {t('nav2')}
            </a>
            <a href="#projects" className='font-helvereg text-base text-gray-500 cursor-pointer transition-all duration-200 ease-in-out hover:opacity-80'>
              {t('nav3')}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-helvemed text-base text-gray-500 cursor-pointer leading-tight'>
              {t('footer1')}: &nbsp;
              <span className='text-custom-orange'>
                <Trans>
                  {t('footer3')}
                </Trans>
              </span>
            </p>

            <p className='font-helvemed text-base text-gray-500 cursor-pointer'>
              {t('footer2')}: &nbsp;
              <span className='text-custom-orange'>
                +996 (550) 142-575
              </span>
            </p>
          </div>
        </div>

        <div className='w-full h-[50px] bg-custom-darkgrey flex justify-center items-center'>
          <p className="font-helvemed text-sm text-gray-500">{t('footer4')}</p>
        </div>

      </div>
    </div>
  )
}

export default App
