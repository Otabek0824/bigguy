import axios from "axios"
import { useState, createContext, useEffect } from "react"



export const UserContext = createContext()

const deleteItem = (id) => {
  fetch(`https://6628929e54afcabd07362d18.mockapi.io/project/${id}`, {
    method: "DELETE",
  })
}



const UserProvider = ({ children }) => {
  const [data, setData] = useState([])


  useEffect(() => {
    axios
      .get('https://6628929e54afcabd07362d18.mockapi.io/project')
      .then((result) => setData(result.data))
  }, [])

  return (
    <UserContext.Provider value={{data, deleteItem, setData}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
