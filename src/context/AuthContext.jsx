import { createContext, useState } from "react"

export const AuthContext = createContext()  

const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("token"))
  const [isAuth, setIsAuth] = useState(user ? true : false) 

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
