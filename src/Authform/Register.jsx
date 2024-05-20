import axios from "axios";
import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// http://localhost:5000/auth/register
const Register = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("");

  const postData = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/register", {
        username: username,
        password: password,
      });
      setStatus(res.status);
    } catch (error) {
      setErrorMsg(error?.response?.data?.message);
    }
  };

  const onRegister = () => {
    postData();
  };
  return (
    <div className="flex flex-col max-w-[400px] py-[20px]">
      {status === 200 && <Navigate to={"/"} />}
      <div className="flex items-center justify-between mb-[30px]">
        <h1 className="font-semibold text-[20px] ms-[3px]">Register</h1>
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
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{errorMsg}</p>
        <button
          onClick={onRegister}
          className="bg-[#ffbe1f] w-[403px] rounded-[10px] py-[14px] font-semibold"
        >
          Davom etish
        </button>
        <button className="rounded-[10px] w-[403px] py-[14px] font-semibold border-2 border-gray-300">
          Bekor qilish
        </button>
        <button onClick={() => navigate("/login")}>login</button>
      </div>
    </div>
  );
};

export default Register;
