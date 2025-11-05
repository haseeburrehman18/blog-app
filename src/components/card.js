import Link from 'next/link'
import React from 'react'

function Card({img,title,date,city,id}) {
  return (
    <div className='flex justify-center items-center flex-row p-5 gap-9 rounded-lg space-y-3 max-w-2/4'>
        <img src={img} className='rounded-s-2xl h-56'></img>
        <div className='text-black flex justify-between  items-end '>
            <div className='space-y-4 '>
             <h2 className='font-bold text-3xl'>{title}</h2>
            <h4 className='font-semibold text-xl'>{date}</h4>
            <p>{city}</p>
            </div>
            <div>
                <Link href={`detail/${id}`} className='py-2 text-sm px-6 whitespace-nowrap rounded-lg bg-purple-500'>Click me !</Link>
            </div>
        </div>
        
        </div>
  )
}

function Card2({img,title,date,city}) {
  return (
    <div className='flex justify-around items-center flex-row p-5 gap-9 bg-yellow-300 rounded-2xl  space-y-3 w-1/3'>
        <img src={img} className='rounded-full h-40 w-40'></img>
        <div className='text-white flex justify-between  items-end '>
            <div className='space-y-4 '>
             <h2 className='font-bold text-3xl'>{title}</h2>
            <h4 className='font-semibold text-xl'>{date}</h4>
            <p>{city}</p>
            </div>

        </div>
        
        </div>
  )
}

export  {Card,Card2}