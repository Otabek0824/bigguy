import { useState, createContext } from "react";

// const { createContext } = require("react");

export const BasketContext = createContext({});

const BasketProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("product" ))
  const [basketData, setBasketData] = useState(storage || []);

  const addBasket = (data) => {
    const isExist = basketData.find((item) => item.id === data.id)
    if(!isExist){
      setBasketData([...basketData, data])
      localStorage.setItem("product", JSON.stringify([...basketData, data]))
    }
  };
  return (
    <BasketContext.Provider value={{ basketData, addBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
