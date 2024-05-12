import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='px-5 md:px-20 lg:px-40 py-4 bg-neutral-700 md:pb-20'>
            <div className="flex justify-between items-center py-10 gap-10 md:flex-row flex-col">
                <p className="text-3xl text-white font-medium">Get your AI apps build with
                    <br /> blazing speed.</p>
                <div className='flex gap-2 items-center py-2 px-5 rounded-md text-white shadow-lg bg-gradient-to-t from-[#ff4400] to-[#ff6600]'>
                    <p>Get started</p>
                    <BsArrowRight />
                </div>
            </div>

            <hr className='bg-slate-700' />

            <div className="flex py-10 text-stone-200 gap-10 md:gap-40 flex-col md:flex-row">

                <div className="w-full flex flex-col gap-5">
                    <p className='text-2xl'>GenAI</p>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis </p>
                    <p className='font-semibold'>All rights reserved</p>
                </div>

                <div className="flex gap-7 md:gap-20 text-sm justify-evenly w-full flex-col md:flex-row">
                    <div className="flex flex-col gap-7">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                        <a href="#">Story</a>
                    </div>
                    <div className="flex flex-col gap-7">
                        <a href="#">Company</a>
                        <a href="#">Product</a>
                        <a href="#">Press</a>
                        <a href="#">More</a>
                    </div>
                    <div className="flex flex-col gap-7">
                        <a href="#">Press</a>
                        <a href="#">Career</a>
                        <a href="#">News Letter</a>
                        <a href="#">More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
