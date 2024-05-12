import React from 'react'

export default function Subscribe() {
    return (
        <div className='text-center py-10 md:py-20'>
            <p className='text-2xl md:text-4xl font-semibold'>Detect your next <span className='text-orange-500'>big movie</span></p>
            <p className='text-slate-700 my-8 px-5 md:px-80'>Lorem ipsum dolor sit, ame laboriosam praesentium sit atque quia modi voluptatem!</p>
            <div className="flex gap-2 justify-center items-center flex-col md:flex-row">
                <input type="text" placeholder='youremail@gmail.com'
                    className='py-2.5 px-5 rounded-md placeholder:text-slate-900 bg-slate-200' />
                <div className='flex gap-2 items-center py-2 px-5 rounded-md text-white shadow-lg bg-gradient-to-t from-[#ff4400] to-[#ff6600]'>
                    Subscribe Now
                </div>
            </div>
        </div>
    )
}
