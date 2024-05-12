import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function CommonSectionComponent({
    title,
    description,
    direction,
    image
}: {
    title?: string,
    description?: string,
    direction?: "ltr" | "rtl",
    image: string,
}) {


    if (direction == "rtl")
        return <div className='flex gap-20 justify-between mb-20 flex-col md:flex-row'>
            <div className="flex flex-col md:w-1/2 w-full">
                <p className='text-5xl font-semibold mb-5'>
                    {title ? "" : <><span className='text-orange-500'>Unleash</span> the power of AI with GenAI</>}
                </p>
                {description ? <p className='leading-7'>{description}</p> : <p className='leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam porro sapiente. Ullam autem, et consectetur adipisicing elit. Optio magnam porro sapiente. Ullam autem, et consectetur adipisicing elit. Optio magnam porro sapiente. Ullam autem, cum odio similique in vero corrupti.</p>}
            </div>
            <div className="flex justify-center md:w-1/2 w-full">
                <Image alt='ad' src={image} height={100} width={100} className='h-96 md:h-[33rem] w-full' />
            </div>
        </div>

    return (
        <div className='flex gap-20 justify-between mb-20 md:flex-row flex-col-reverse'>
            <div className="flex justify-center md:w-1/2 w-full">
                <Image alt='ad' src={image} height={100} width={100} className='h-96 md:h-[33rem] w-full' />
            </div>
            <div className="flex flex-col md:w-1/2 w-full">
                <p className='text-5xl font-semibold mb-5'>
                    {title ? "" : <><span className='text-orange-500'>Unleash</span> the power of AI with GenAI</>}
                </p>
                {description ? <p className='leading-7'>{description}</p> : <p className='leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam porro sapiente. Ullam autem, et consectetur adipisicing elit. Optio magnam porro sapiente. Ullam autem, et consectetur adipisicing elit. Optio magnam porro sapiente. Ullam autem, cum odio similique in vero corrupti.</p>}
            </div>
        </div>
    )
}