import axios from "axios";
import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        username: username,
        password: password,
      });
      if (res.status == 200) {
        setIsAuth(true);
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
    } catch (error) {
      setIsAuth(false);
      setError(error.response.data.message);
    }
  };

  const onLogin = () => {
    loginUser();
  };

  const navigate = useNavigate();
  return (  
    <div className="flex flex-col w-[400px] py-[20px]">
      <div className="flex items-center justify-between mb-[30px]">
        <h1 className="font-semibold text-[20px] ms-[3px]">Login</h1>
        <IoMdClose className="size-[26px] cursor-pointer text-gray-400" />
      </div>
      <div className="flex flex-col gap-[17px]">
        <input
          className="w-[400px] border-2 border-gray-300 px-[10px] rounded-[10px] py-[14px]"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-[400px] border-2 border-gray-300 px-[10px] rounded-[10px] py-[14px]"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{error}</p>
        <button
          onClick={onLogin}
          className="bg-[#ffbe1f] w-[403px] rounded-[10px] py-[14px] font-semibold"
        >
          Davom etish
        </button>
        <button className="rounded-[10px] w-[403px] py-[14px] font-semibold border-2 border-gray-300">
          Bekor qilish
        </button>
        <button onClick={() => navigate("/register")}>register</button>
      </div>
    </div>
  );
};

export default Login;
