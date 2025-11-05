"use client"
import { Card2 } from '@/components/card'
import React, { useState,use, useEffect } from 'react'

function EventDetail({params}) {
    const {id}=use(params);
     let [data, setdata] = useState([]);
    
      let fetchData = async () => {
        let res = await fetch(
          "https://mocki.io/v1/cd0deadb-35ee-494d-9d93-6548a95a8eb9"
        );
        let alldata = await res.json();
        setdata(alldata);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div className='bg-white min-h-screen relative'>
<div className='bg-cyan-200 h-56 text-white text-center pt-14'>
    <h2 className='text-2xl '>Programming for everyone</h2>
</div>
<div className='flex justify-center items-center w-full  absolute top-32'>
    <Card2 city={data[id]?.city||"Not found"} img={data[id]?.image_link||"Not found"} title={data[id]?.title||"Not found"} date={data[id]?.date||"Not found"}></Card2>
</div>

    </div>
  )
}

export default EventDetail