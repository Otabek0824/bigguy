import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, json } from "react-router-dom";
import { BasketContext } from "../somethings/basketContext";
import "./header.css";
import Sidebar from "../sidebar/Sidebar";
import { UserContext } from "../context/userContext";
import Test from "../sidebar/Test";
const Header = ({}) => {
  const { basketData } = useContext(BasketContext);

  // const [data, setData] = useState([]);

  // const url = "https://6628929e54afcabd07362d18.mockapi.io/project";

  // useEffect(() => {
  //   axios.get(url).then((res) => setData(res.data));
  // }, []);

  const data = useContext(UserContext);
  console.log(data);

  const [searchTerm, setSearchTerm] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 20) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);
  return (
    <div id="nothing" className={`${fix ? "navbar fix" : "navbar"}`}>
      <div className="w-full md:hidden outline-orange-500 mb-[20px] flex justify-between items-center border-2 border-gray-200 px-[10px]  mt-[14px] rounded-[6px] h-[40px]">
        <input
          className="outline-none w-[90%]"
          type="text"
          placeholder="tovarlarni izlash"
        />
        <button className="outline-none bg-[#ffbe1f] px-[15px] py-[4px] rounded-[10px] font-semibold">Qidirish</button>
      </div>
      <div  className={`${fix ? "navbar fix" : "navbar"} hidden md:block`}>
        <div className="flex w-[100%] container mx-auto flex-col ">
          <div className="my-[13px] items-center ">
            <div className="flex justify-between items-center gap-[5px]">
              <Link to={"/"} className="text-2xl font-bold">
                <img
                  className="h-[35px] w-[170px]"
                  src="	https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg"
                  alt=""
                />
              </Link>
              <button
                className="bg-[#ffbe1f] px-[20px] rounded-[10px] py-[10px]"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                tovarlar katalogi
              </button>

              <div className="border-[2px] flex items-center justify-between rounded-[10px] h-[40px] w-[400px] ps-[12px] border-[#ffbe1f]">
                <input
                  type="text"
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Tovarlarni izlash"
                  className=".placeholder-gray-500::placeholder outline-none w-[90%]"
                />

                {/* {data.filter((val) => {
                if (searchTerm == "") {
                  return val.desc;
                } else if (
                  val.desc.toLowercase().includes(searchTerm.toLowerCase())
                ) {
                  val;
                }
              }).map((item)=>(
                  <div className="mt-[500px]" key={item.id}>
                    <h1>{item.title }</h1>
                  </div>
              ))} */}

                <div className="h-full flex items-center justify-center w-[50px] bg-[#ffbe1f]">
                  <img
                    className="h-[20px]"
                    src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                    alt="search icon"
                  />
                </div>
              </div>
              <div className="savat">
                <Link
                  className="flex flex-col relative items-center"
                  to={"/baset"}
                >
                  {basketData.length > 0 ? (
                    <button className="bg-red-600 left-[25px] bottom-[30px] absolute  px-[10px] h-[fit] py-[1px] flex items-center justify-between  text-white rounded-full text-[20px]">
                      {""}
                      {basketData?.length}
                    </button>
                  ) : (
                    ""
                  )}
                  <img
                    className="h-[25px] cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/512/69/69986.png"
                    alt="img"
                  />
                  <h1>savat</h1>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="h-[25px]"
                  src="https://www.svgrepo.com/show/13666/heart.svg"
                  alt="img"
                />
                <h1>Saralanganlar</h1>
              </div>
              <button
                id="btn"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
                className="border-[2px] px-[20px] py-[7px] rounded-[10px] font-semibold border-[#ffbe1f]"
              >
                chiqish
              </button>
              <h1 className="text-2xl">Ru/uzb</h1>
            </div>
          </div>
          <div>
            <div>
              <ul className={menuOpen ? "block" : "hidden"}>
                <Test />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
