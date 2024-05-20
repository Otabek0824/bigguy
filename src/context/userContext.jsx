import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6628929e54afcabd07362d18.mockapi.io/project")
      .then((res) => setData(res.data));
  }, []);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export default UserProvider;
