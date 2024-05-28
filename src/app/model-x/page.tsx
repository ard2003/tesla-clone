import React from 'react'
import hero from "@/public/images/model-x/Model-X-Main-Hero-Desktop.jpeg"
import Image from 'next/image'

const ModelXPage = () => {
  return (
    <>
    <Image src={hero} alt='hero' className=' w-screen' />
    </>
  )
}

export default ModelXPage