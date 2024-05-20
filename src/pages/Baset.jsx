import React, { useContext } from "react";
import { BasketContext } from "../somethings/basketContext";
import BasketCard from "../somethings/basketCard";
import { Link } from "react-router-dom";

const Baset = () => {
  const { basketData } = useContext(BasketContext);
  return (
    <div className="mx-auto container">
      {basketData.length !== 0 ? (
        basketData.map((item) => <BasketCard key={item.id} item={item} />)
      ) : (
        <div className="text-center mt-[100px]">
          <h2 className="text-4xl pb-[10px] font-medium">
            Savat hozircha bo'sh
          </h2>
          <h1 className="leading-[30px] text-gray-500">
            Mahsulotlarni topish uchun katalogni ko'ring{" "}
            <span className="block"></span> yoki qidiruvdan foydalaning
          </h1>
          <div className="flex flex-col items-center mt-[40px] gap-[10px]">
            <Link
              to="/"
              className="px-[100px] py-[10px] rounded-[10px] bg-[#ffbe1f] border"
            >
              Katalogga o'tish
            </Link>
            <Link to="/" className="px-[100px] py-[10px] rounded-[10px] border">
              Asosiyga o'tish
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Baset;
