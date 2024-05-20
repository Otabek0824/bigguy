import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "../context/userContext";
import BasketProvider from "./basketContext";
import Routers from "../routes/Route";
import AuthProvider from "../context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BasketProvider>
      <UserProvider>
        <Routers />
      </UserProvider>
    </BasketProvider>
  </AuthProvider>
);
