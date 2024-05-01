import React, { useContext } from "react";
import { BasketContext } from "../basketContext";

const Portfolio = () => {
  const { basketData } = useContext(BasketContext);
  console.log(basketData);
  return (
    <div>
      <h1 className="ps-[45px] font-black text-[24px]">There are {basketData?.length} products on basket</h1>
      {basketData.map((item) => (
        <div className="flex items-center gap-9 px-[40px] py-[35px] shadow-2xl" key={item.id}>
          <img className="h-[200px]" src={item.img} alt={item.title} />
          <div className="flex flex-col gap-4">
            <h1>{item.title}</h1>
            <h1>narxi: <span className="text-red-500"> {item.price} so'm</span></h1>
            <h3>Mahsulot haqida: {item.desc}</h3>
            <button className="text-white bg-red-900">delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
