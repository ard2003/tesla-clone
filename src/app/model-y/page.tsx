import React from 'react'
import hero from "@/public/images/model-y/New-Model-Y-Main-Hero-Desktop-LHD.jpeg"
import Image from 'next/image'

const ModelYPage = () => {
  return (
    <>
    <Image src={hero} alt='hero' className=' w-screen' />
    </>
  )
}

export default ModelYPage