import React, { useContext, useState } from "react";
import { BasketContext } from "./basketContext";

const BasketCard = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const { deleteProduct } = useContext(BasketContext);

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  let calculatePrice = parseInt(item.price * counter);
  return (
    <div className="container mx-auto">
      <div
        className="flex justify-between items-center border border-black gap-9 px-[20px] py-[15px] shadow-2xl"
        key={item.id}
      >
        <div className="flex items-center gap-2 p-[10px] ">
          <img className="h-[200px]" src={item.img} alt={item.title} />
          <div className="flex flex-col gap-[10px]">
            <h1>{item.title}</h1>
            <h3>Mahsulot haqida: {item.desc}</h3>
            <h1>
              narxi:{" "}
              <span className="text-red-500">
                {" "}
                {calculatePrice.toLocaleString("ru")} so'm
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px] p-[4px]">
          <div className="flex items-center gap-[8px]">
            <button
              onClick={decrement}
              className="bg-gray-500 active:bg-gray-600 px-[20px] py-[3px] text-white "
            >
              -
            </button>
            <span>{counter}</span>
            <button
              onClick={increment}
              className="bg-gray-500 active:bg-gray-600 px-[20px] py-[3px] text-white "
            >
              +
            </button>
          </div>
          <button
            onClick={() => deleteProduct(item.id)}
            className="text-white px-[37px] py-[4px] bg-red-900"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
