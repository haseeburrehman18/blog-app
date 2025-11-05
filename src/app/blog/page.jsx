
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div className='flex justify-center items-center flex-col bg-gradient-to-r from-yellow-200 to-yellow-500  min-h-screen '>
    <div className='text-[40px] font-bold text-black'>
        Explore Our Blogs
    </div>
    <div className='pt-3'>
        <Link href='./abdullah' className='p-2 px-3 bg-black text-white rounded-lg ' >
            Explore
        </Link>
    </div>
    </div>
  )
}

export default Page