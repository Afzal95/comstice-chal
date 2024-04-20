import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <section className='bg-white md:px-24 md:py-28 px-4 py-6 md:flex md:justify-between'>
        <div className='max-w-md pb-4'>
            <h1 className='md:text-[80px] text-2xl sm:text-center md:text-left md:leading-[106%]'>Avaya Call Reporting Reinvented</h1>
            <p className='md:text-lg sm:text-xs pt-4 pb-2 '>Step into the future of call center analytics with Comstice Avaya Call Reporting solution. Say goodbye to the need for an Avaya AES server and extra licenses for every agent, and say hello to a world of insightful analytics, cradle-to-grave reports, and automated agent and team reports by email.</p>
            <button className='bg-[#4C3DFF] px-6 py-4 rounded-md text-white md:right-6'>Request Demo</button>
        </div>
        <div>
            <Image src={'/video-image.png'} width={650} height={480} alt='thumbnail image' />
        </div>
    </section>
  )
}

export default Herosection