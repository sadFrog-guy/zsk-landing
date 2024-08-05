import React from 'react'
import { Trans } from 'react-i18next'

export default function ServiceItem({title, logo, text}) {

  return (
    <div className="service-item rounded-xl bg-custom-gradient2 p-[17px] max-w-[360px] h-[229px] border-2 border-solid border-custom-border transition-all duration-200 ease-linear hover:border-custom-orange scale-on-hover">
        <div className="flex gap-[35px] justify-between mb-[20px]">
            <h1 className="font-helvebold text-2xl w-[60%] leading-tight">
                <Trans>
                    {title}
                </Trans>
            </h1>

            <div className="bg-custom-gradient flex justify-center items-center rounded-lg size-[62px] relative scale-on-hover-child">
                <img src={logo} className='size-[40px]' alt="" />
            </div>
        </div>

        <p className="font-helvereg text-sm leading-tight">
            {text}
        </p>
    </div>
  )
}
