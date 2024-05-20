import React, { useEffect, useState } from "react";
import axios from "axios";
const Sidebar = () => {
  const url = "https://b7eae08b1f6d4454.mokky.dev/menu";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100 fixed top-[100] z-[999] w-full h-[100%]">
        {data.map((product) => (
          <div className="container mx-auto" key={product.id}>
            <div className=" flex gap-[5px] w-full flex-col justify-between">
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.Noutbuk}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.TV}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.Texnika}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.Oshxona}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.Soglik}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.oyin}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.sport}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.tovarlar}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.asboblar}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.buyumlar}</h1>
              </div>
              <div className="hover:bg-white hover:text-yellow-500 w-[300px] py-[10px] px-[10px] cursor-pointer">
                <h1>{product.tamirlash}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
