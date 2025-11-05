"use client";
import {Card} from "@/components/card";
import React, { useEffect, useState } from "react";

function Detail() {
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
    <div className="bg-blue-200 min-h-screen flex justify-center items-center flex-col">
      {data?.map((data, idx) => (
        <Card
          key={idx}
          id={idx}
          title={data?.title}
          img={data?.image_link}
          date={data?.date}
          city={data?.city}
        />
      ))}
    </div>
  );
}

export default Detail;
