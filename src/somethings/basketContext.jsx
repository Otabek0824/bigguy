import { useState, createContext, useEffect } from "react"

export const BasketContext = createContext({})

const BasketProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("product"))
  const [basketData, setBasketData] = useState(storage || [])

  const addBasket = (data) => {
    const isExist = basketData.some((item) => item.id === data.id)

    if (!isExist) {
      setBasketData([...basketData, data])
    }                 
  }

  const deleteProduct = (id) => {
    const newData = basketData.filter((item) => item.id !== id)
    setBasketData(newData)
  }

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(basketData || []))
  }, [deleteProduct])

  return (
    <BasketContext.Provider value={{ basketData, addBasket, deleteProduct }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
