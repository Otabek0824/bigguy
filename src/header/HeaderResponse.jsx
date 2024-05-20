import { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { MdManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { BasketContext } from "../somethings/basketContext";
import "./header.css";
import { UserContext } from "../context/userContext";
import { FaRegHeart } from "react-icons/fa6";
const HeaderRes = ({}) => {
  const { basketData } = useContext(BasketContext);

  const data = useContext(UserContext);

  return (
    <div id="nothingg" className={`w-full`}>
      <div className="flex md:hidden fixed bottom-0 justify-between bg-white border-t-2 container ">
        <div className="mt-[13px] items-center flex justify-around  w-full ">
          <Link to={"/"} className="  flex flex-col gap-[6px] items-center">
            <FiHome className="text-[23px] text-gray-500" />
            asosiy
          </Link>
          <button className="flex flex-col gap-[6px] items-center ">
            <MdManageSearch className="text-[25px] text-gray-500" />
            Katalog
          </button>
          <Link className="flex flex-col gap-[6px] relative items-center" to={"/baset"}>
            {basketData.length > 0 ? (
              <button className="bg-red-600 left-[25px] bottom-[35px] absolute  px-[7px] h-[fit] flex items-center justify-between  text-white rounded-full text-[16px]">
                {""}
                {basketData?.length}
              </button>
            ) : (
              ""
            )}
            <SlBasket className="text-[23px] text-gray-500" />
            <h1>savat</h1>
          </Link>
          <div className="flex flex-col gap-[6px] items-center">
            <FaRegHeart  className="text-gray-400 font-bold cursor-pointer text-[23px]" />
            <h1>Saralanganlar</h1>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
            }}
            className="flex flex-col items-center gap-[6px]"
          >
            <IoPersonOutline size={27} className="text-gray-400" />
            Profil
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRes;
