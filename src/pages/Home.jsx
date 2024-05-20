import User from "../korzinka/User";
import Corousel from "../somethings/corousel";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import Discount from "./chegirmalar";
import Interest from "./Interest";
import HeaderRes from "../header/HeaderResponse";
const Home = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col gap-[30px] container">
        <nav className="items-center bg-white hidden  justify-between">
          <Link className="a hidden" to={"/smartfonlar"}>
            Smartfonlar va gadjetlar
          </Link>
          <Link className="a hidden" to={"/noutbook"}>
            Noutbuklar, kompyuterlar
          </Link>
          <Link className="a hidden sm:block" to={"/projecter"}>
            TV va proektorlar
          </Link>
          <Link className="a hidden" to={"/audiotexnikalar"}>
            Audiotexnikalar
          </Link>
          <Link className="a hidden" to={"/technology"}>
            Uy uchun texnikalar
          </Link>
          <Link className="a hidden" to={"/techforkitchen"}>
            Oshxona uchun texnikalar
          </Link>
          <Link className="a hidden" to={"/beauty"}>
            Go'zallik va sog'liq
          </Link>
          <Link className="a hidden" to={"/clever"}>
            Aqqli uy
          </Link>
          <Link className="flex text-black items-center gap-[3px]" to={"/next"}>
            yana <FaArrowDown />
          </Link>
        </nav>
        <Corousel />
      </div>
      <User />
      <Discount />
      <Interest />
      <div>
        <HeaderRes />
      </div>
    </div>
  );
};

export default Home;
