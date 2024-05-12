import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function FirstSection() {
    return (
        <div className='flex gap-10 items-center mt-20 flex-col md:flex-row'>
            <div className="md:w-1/2 flex gap-7 flex-col">
                <div className="">
                    <p className='text-4xl md:text-6xl text-orange-500 font-semibold'>Transform Ideas</p>
                    <p className='text-4xl md:text-6xl font-semibold'>Into Apps with AI</p>
                </div>
                <p>Step into a new area of strategix decision-making. Horizon empowers businesses in the marketing space with unparalleled</p>
                <div className='flex gap-2 items-center py-2 w-fit px-5 rounded-md text-white shadow-lg bg-gradient-to-t from-[#ff4400] to-[#ff6600]'>
                    <p>Get started</p>
                    <BsArrowRight />
                </div>
            </div>
            <div className="flex justify-center items-center md:w-1/2 w-full">
                <Image alt='ad' src={"/1.png"} height={100} width={100} className='h-full w-full' />
            </div>
        </div>
    )
}
