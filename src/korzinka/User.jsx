import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BasketContext } from "../somethings/basketContext";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../context/userContext";

const User = () => {
  const data = useContext(UserContext);
  // const [data, setData] = useState([]);
  const url = "https://6628929e54afcabd07362d18.mockapi.io/project";
  console.log(data);
  const { addBasket } = useContext(BasketContext);
  const navigate = useNavigate();

  const onAdd = (product) => {
    addBasket(product);
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-[10px] items-center">
        <h1 className="text-[20px] font-semibold mb-[20px] lg:Text-[30px]">Yoz kelmoqda</h1>
        <Link
          className="text-[10px] pb-[15px] flex items-center gap-[5px] font-semibold text-[#2a8be7]"
          to={"/next"}
        >
          Hammasini ko'rish <IoIosArrowForward />
        </Link>
      </div>
      <div className="grid gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
        {data.map((product) => (
          <div key={product.id}>
            <div className="flex items-start justify-between flex-col gap-[10px]">
              <div onClick={() => navigate(`/products/${product.id}`)}>
                <div className="border flex flex-col justify-between px-[2px] py-[2px] cursor-pointer border-gray-400">
                  <div className="border px-[10px] py-[4px] border-gray-400">
                    <img
                      className="h-[130px] w-full"
                      src={product.img}
                      alt={product.title}
                    />
                  </div>
                </div>
                <h1 className="text-[14px]" id="point">
                  {product.desc}
                </h1>
              </div>
              <div className="px-[5px] bg-[#ffedc2] border rounded-[15px] text-[12px] border-[#ffca48]">
                <h1>
                  dan{" "}
                  <span className="font-bold">
                    {parseInt(product.payment).toLocaleString("ru")}
                  </span>{" "}
                  so'm/oyga
                </h1>
              </div>
              <div>
                <h1 className="line-through text-gray-400">
                  {parseInt(product.deletedprice).toLocaleString("ru")} so'm
                </h1>
                <h1 className="text-red-500">
                  {parseInt(product.price).toLocaleString("ru")} so'm
                </h1>
              </div>

              <button
                onClick={() => onAdd(product)}
                className="bg-[#ffbe1f] flex gap-[10px] items-center text-black rounded-[10px] px-2 py-2"
              >
                <img
                  className="h-[25px] cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/69/69986.png"
                  alt="img"
                />
                savatga
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
