import Image from 'next/image'
import React from 'react'

const Advantage = () => {
  return (
    <section className='bg-white md:px-24 md:py-28 px-4 py-6 md:flex gap-2 items-center '>
        <div className='flex gap-2 md:items-center'>
            <Image src={'/download.svg'} width={24} height={24} alt='icon' />
            <div className='md:max-w-[306px]'>
                <h4 className='text-black-600 md:text-2xl text-base-600 md:mb-3'>Lower Cost of Ownership</h4>
                <p className='text-grey-400 md:text-base'>No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <Image src={'/download.svg'} width={24} height={24} alt='icon' />
            <div className='md:max-w-[306px]'>
                <h4 className='text-black-600 md:text-2xl md:mb-3'>Lower Cost of Ownership</h4>
                <p className='text-grey-400 md:text-base'>No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <Image src={'/download.svg'} width={24} height={24} alt='icon' />
            <div className='md:max-w-[306px]'>
                <h4 className='text-black-600 md:text-2xl md:mb-3'>Lower Cost of Ownership</h4>
                <p className='text-grey-400 md:text-base'>No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
            </div>
        </div>
    </section>
  )
}

export default Advantage