import React from 'react'

export default function Heading({children, variation}) {
    const classes = `font-days font-bold text-${variation} text-2xl text-center heading-adaptive`

  return (
    <h1 className={classes}>
        {children}
    </h1>
  )
}
