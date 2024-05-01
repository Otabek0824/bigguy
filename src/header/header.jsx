import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import { Link } from "react-router-dom"
const Header = ({ otabek }) => {
  const { data } = useContext(UserContext)
  return (
    <div className="border-b-[2px] items-center pb-[10px] my-[30px] justify-between flex px-[50px]">
      <a href="#" className="text-2xl font-bold">
        Logo
      </a>
      <nav className="flex gap-[40px]">
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/contact"}>contact</Link>
      </nav>
      <div className="flex gap-[30px]">
        {/* <button >{data.length} ta card bor</button> */}
        <Link to={"/portfolio"}>
          <img
            className="h-[50px] cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyykVvoCRFvJOXfuJIa_OTV7Qsuf8c0IfinPMBgNO007jllOXaTayDfaPGliY2XraEsE&usqp=CAU"
            alt="img"
          />
        </Link>
        <button className="border border-green-700 text-green-700 px-[20px] py-[10px]">
          sign in
        </button>
        <button className="border border-green-700 text-green-700 px-[20px] py-[10px]">
          sign up
        </button>
      </div>
    </div>
  )
}

export default Header
