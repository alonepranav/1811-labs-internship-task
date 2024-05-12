"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { BsArrowRight, BsList } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { PiAlignRightThin } from 'react-icons/pi'

export default function Navbar() {

    const [hide, setHide] = useState<boolean>(false)

    return (
        <div className='flex justify-between items-center relative pt-4 px-2 md:px-10 lg:px-40'>
            <div className="flex items-center">
                <Image alt='asdasd' className='h-10 w-10' src={"/6.png"} height={100} width={100} />
                <p className='text-2xl font-semibold'>GenAI</p>
            </div>


            <ul className='hidden md:flex gap-7 items-center text-slate-600 text-sm'>
                <a href='#'>Features</a>
                <a href='#'>Products</a>
                <a href='#'>Testimonial</a>
                <a href='#'>FAQ</a>
            </ul>

            {
                hide &&
                <ul className='shadow shadow-slate-300 flex flex-col absolute top-16 left-0 w-full bg-white md:hidden gap-7 px-3 py-4 text-slate-600'>
                    <a href='#'>Features</a>
                    <a href='#'>Products</a>
                    <a href='#'>Testimonial</a>
                    <a href='#'>FAQ</a>
                </ul>
            }


            <div className="flex gap-2">
                <div className='flex gap-2 items-center py-1.5 md:py-2 px-3 md:px-5 rounded-md text-white shadow-lg bg-gradient-to-t from-[#ff4400] to-[#ff6600]'>
                    <p>Get started</p>
                    <BsArrowRight />
                </div>
                {
                    <p onClick={() => setHide(!hide)} className='px-1.5 flex md:hidden justify-center items-center text-2xl'>
                        {hide ? <GrClose /> : <BsList />}
                    </p>
                }
            </div>
        </div>
    )
}
