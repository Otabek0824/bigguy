import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BasketContext } from "../basketContext";

const User = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const url = "https://6628929e54afcabd07362d18.mockapi.io/cards";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const onAdd = (product) => {
    addBasket(product);  
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-[30px] grid-cols-4">
        {data.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.title} />
            <h1 >{product.desc}</h1>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <button
              onClick={() => onAdd(product)}
              className="bg-red-700 text-white rounded-[10px] px-2 py-1"
            >
              add to basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
