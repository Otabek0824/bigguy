import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "./context/userContext";
import Routers from "./routes/Route";
import BasketProvider from "./basketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <UserProvider>
      <Routers />
    </UserProvider>
  </BasketProvider>   
);
