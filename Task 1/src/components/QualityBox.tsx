import Image from 'next/image'
import React from 'react'

export default function QualityBox() {

    function Box() {
        return <div className='h-48 w-72 p-3 gap-3 rounded-2xl shadow shadow-slate-400 flex flex-col justify-between'>
            <Image
                className='h-12 w-12'
                src={"/5.png"} alt='sadasd' height={100} width={100} />
            <p className='font-semibold text-lg'>Quality Apps</p>
            <p className='text-sm'>Identify strength, capitalize on weaknesses, and chart a course for unparalleled success</p>
        </div>
    }

    return (
        <div>
            <div className='text-center py-10 md:py-28 flex gap-7 flex-col px-5 md:px-60'>
                <p className='text-center text-2xl md:text-4xl font-semibold mb-1'><span className='text-orange-500'>Essentially, </span> everything you need to ship you first AI App</p>
            </div>
            <div className='flex gap-10 justify-center items-center flex-wrap'>
                {[1, 1, 1, 1, 1, 1].map((_, i) => <Box key={i} />)}
            </div>
        </div>
    )
}
