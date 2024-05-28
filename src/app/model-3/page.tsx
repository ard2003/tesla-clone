import React from 'react'
import hero from "@/public/images/model-3/Model-3-Choose-Standard-Desktop-LHD.jpeg"
import Image from 'next/image'

const Model3Page = () => {
  return (
    <>
    <Image src={hero} alt='hero' className=' w-screen' />
    </>
  )
}

export default Model3Page