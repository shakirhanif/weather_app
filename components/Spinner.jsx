import Image from 'next/image'
import React from 'react'
import spinner from '../public/loading.gif'

export const Spinner = () => {
  return (
    <>
        <Image src={spinner} alt='/' className=' w-[200px] m-auto block'></Image>
    </>
  )
}
