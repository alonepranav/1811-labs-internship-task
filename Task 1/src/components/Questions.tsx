"use client"

import React, { useState } from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa'

export default function Questions() {

    const Field = () => {

        const [icon, setIcon] = useState<boolean>(false)
        return <div className='w-full md:w-[35rem]'>
            <div className="flex justify-between items-center bg-white rounded py-4 px-6">
                <p>Lorem ipsum dolor sit?</p>
                <p onClick={() => setIcon(!icon)} className='p-1'>{!icon ? <FaSortDown /> : <FaSortUp />}</p>
            </div>
            {
                icon && <p className="p-6 bg-white border-t border-t-slate-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magni quisquam fugit vitae ratione explicabo rem omnis obcaecati illo exercitationem minus! Maxime et magnam aut aspernatur a qui consequatur facere!
                </p>
            }
        </div>
    }


    return (
        <div className='bg-slate-100 py-20'>
            <div className="text-center  ">
                <p className='text-3xl font-semibold mb-4'>Need Help?</p>
                <p className='text-slate-600'>Don&apos;t worry, we got you. Here are some answers for your questions.</p>
            </div>
            <br />
            <div className="flex justify-center items-center gap-3 flex-col px-5 md:px-0">
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
            </div>
        </div>
    )
}
