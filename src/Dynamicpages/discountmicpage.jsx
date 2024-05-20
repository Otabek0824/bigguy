import axios from "axios";
import { FaArrowLeft } from "react-icons/fa6";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "../somethings/basketContext";
const DiscountMicPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  const [err, setErrMsg] = useState("");
  const { addBasket } = useContext(BasketContext);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://6628929e54afcabd07362d18.mockapi.io/fake/${params.id}`
      );
      setData(response.data);
    } catch (error) {
      setErrMsg(error.response.data);
    }
  };

  const onAdd = (product) => {
    addBasket(product);
  };

  useEffect(() => {
    getData();
  }, [params]);

  const objtoArr = Object.keys(data);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleClick = (e) => (e.target.textContext = "oyga");

  return (
    <div className="container mx-auto">
      {objtoArr.length === 0 && (
        <h1 className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          loading....
        </h1>
      )}
      <button
        className="text-blue-500 flex items-center gap-[10px]"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> click here to get to products page
      </button>
      <div>
        {err.length > 0 ? (
          <h1>{err}</h1>
        ) : (
          <div className="flex  container mx-auto">
            <div className="w-[40%]">
              <img className="h-[400px]" src={data.img} alt="" />
            </div>
            <div className="flex w-[60%] gap-[10px] items-start flex-col">
              <div className="flex gap-[10px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    className="h-[20px]"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <img
                    className="h-[20px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///+AgIB9fX2goKCoqKi5ubmwsLCCgoJ6enqbm5v29vb8/PyBgYH5+fmHh4eNjY3w8PDo6OjKysrc3NySkpLAwMCzs7PX19fMzMzj4+OQkJCdnZ3s7Oyqqqq3t7fR0dHXpwjEAAAIoklEQVR4nO1diYKrKgy9RK0LdV873f7/L5/tTBdbULAGhNfzAR0yHLMn/Pv3xRdffPGFaaB5pPsIyMiOre4jIKNMvFj3GVBB62Cf6T4EKjIH/FL3IVCxSwjUVPcpEEFrIBDarE3jPRBCbKbpzu8FDE66j4GIOuglhNTiD7G6kJQEO93nQEN+FZAEnu6DoOFK0p6moa1uDd3/3iFJbNWmeUL+YCtN65uAsLfT6MfOTUKS2hlC7X7gJqFvJ00L/36H4NgYQkVH8pDQSpruKniI6NsYQhUJebpE1z6aRg08S5jaZ/QHJO1RWEfTzh8IaB9NhyS9GH3bQqj8haQEbKNpuyUvErp2+abxK0n7ECrXfahFkb2StI/0C92HWhTtm4B9pK/7UIti8y4hIQfdp1oQUcoQ0CqalgFDQnB0H2tBNCwJSWIPTaMf1mfY+6a6D7YYyldz/0dT1xq35t3c/0r4Y4vRz0K2hMS3haZtwhaQkKMl6X2P/Rn2NK3sCKEyh0PS3l50ug+3CNqUKyFpbKAprX2ugBDaoE0zl3+FJDnrPt4CKFle9/0ST+ZH+rQeEdAKmo6StDf65hcwdmMkvdDUdG1Ki9Er7I2+6ZnhaJykxPwesJzrk/7B+B6wghndP9M0NdteUL5Per9Es2l64Htsdwkb3Yf8CJMkvUT6RtuLaZISs7VpNk3S/hJNbq7pRK7Q5MZvOmnur0jM9U0P4z7pDVtzaVqIfIaXVkVTfVN6nJbuKqGxPWBv3Qk8GNsD1k153fdLNLS5Jm4EBezdGjONfs4rV7xja2ZzzVmUpP0lHk2kaXwSvsJem5pYwDiIk5SY2arIr6kxaWqebxp7MlcIqXmZYW7hlyOieXW2UswnvUvomPYhUm86fzGAb1pzTSTqk95gXA9YKSmgeT1gJ0mS9jQ1y62hnD6vEQRmlYN30gL2Rl/3oaUgq0kvSJFoGhX1Fd4AmwGO7iscFvbhHTIe2x3V4weYv/92Cnd4zGYow69cvUt/roJ3wIeYIyD59I8y5PA3F3833yTzTrR+hB39I6qseTYC4B/vUScthSooZgGS+ll1Zd7Mb2e1CKpy6MvT80h/nXkAVubn4Oo+1nKAlJkViWtbrtF3eImtdq/7bEsAUo/vHR0a3/hrhPA8li6ICvmgYFUAcpxIvRpuGl+MIBuZZy5TISyFElqmmkYgG9EALHOJgTJCKpFzpZ5x1wh8I8hG60z/6JowagTZyBuTosbeCMp3x0WdOaZxu5lVf6Q7Z0Y+SQPAr+fW5uLGhKgx+KiA3Fa6zz8F+E02zUd+XLnCqbpPy3JRvWKFA767QCfOin1xIT9bBIdmnU5cULVLtYhH3RqdODgu2d2w269NxA+MIBuRtzKdGi7f7HdeUeofkgajFJcftyuREaoCZwolWktC1UFrR43bFSgcSDzM1pt8oztNBdUZt8kvKvTqVJDMVczB6xJLpfL5St5wiY7amPqjaDAjLrREjX0goawJlZYub+UMooDpQoGEGA7KnTgIFwskxKA83Fg0kBBDXqnLxAEsHEiIIdqoCoy1DbfRTmyC8lP4rr4O6dJRoFNTLQy94XBC16njZXl8RAWuToWpsjw+aIvopwKRrplhIBebSZ8jYNKtY6NEdMLRN1CtZrQ0OqLc4oo2ERxw8v4rWv7Z4lh++LButhzGl859IGG1lqHEiaVz87Fdy4c4sXRuPoKVvKw7tXRuPtayrm566dx8EddhECeXzs3HStbVdXixPlRrsBeCq5Jmiqg9suiR4ZF0JU+WnjETUlCtYIgdk6S9iPrdmkhus4C0hLVuAf+dcfM0sNfu1uCEhg8kurUp4yGnZeHrpqnEqqR50P56mfA+r9kS/uilqeQWmjnQnMs441cu9C5Yoh66gJofMkFKsg2hlaZISbYhdKbcsJJsLxJqTLmhJdmG2OrbXDP6/Mhy0PdCBF6S7UXCSleVO1I1pgC6MsO7OT7pnEmqYKMp0hdYmv8mn++48pV/wFqwNIFYvmEY0vowZxtOoIemuXTlN3DLeNZco6Y9YLXkOcG/NRdmJ9luqkTLhygZOD2vxIm7VO7fo+Uhk0zqjOAP3x/L5bbhwEaDhHIkfetskhvegB/13rfAGzmP8/kbhvPcytBcw+tlEjU13hCP1PCG+vd2BF92uHRucSdZJZriIFRt9IVraqOTrBITuMqbaEVfdoCqHTVlmfDIv+o6WyH0GTLXpr3gLOangqOWprFQuUJsY0zmCCkcxTQVGX4S3hgjaBrVPmTSTWtSiY0xVGRRnNqHTCLOa+nPB5KacckFFsWlKn3T6edHgOXFjCDqJhUOqHwh4jxBUiDS7ct0cgZHJU3jiX3k80oN0ZRpVFgOPoxr0mTuQ80T23ACdTRtRwWs5o+A7EbHU2GvKoSiDZ+kz+uJZ2DcNPqqChgRfycPJMVn6oCWIxk8ZS9E8F92CMJxP1sEhxN3OQWESxxfADySAmyWKDCMjKeCGntBOQfoGbpQjYi7DSdQ897OjnOFznJ6gNZsDwf2i/2JMTBJCom3qCrnTMQlKmgas/42VEvz58B8z2CrQpsyHnL60Aiywa7guArcmvcWGqRtB7R8z4ur6FqI3gIn0fXE8mAsbU7wtelrdwIEwuuJ5UHb5EWtAX452Bt+hpDgtoJEzrAQByE2TYfdCeA76G0SxZA06DQtn71uULIMYLjWABrk5pr6maT7z/1sEQxWxWDT9GmmGUijKlyLz085HOT550cmGHzkrWID5O5dRMAdu+xuAgboOm2IqL7pVNhjKrcbSWG7rJ8tgvJGny1mZnj3FxpWOjp4sr8t8YGHqN+uc2rsqrwC0O56jRDi8SfewPWlIW2jSLvfZynwMsNZT1LAW60pgGu2McAbFGqDR+eWJtB2DxCifYibYKIqrwJZAwGWvYh9pUVKLs5bLJrudA/K3ZCtYf75iy+++OL/hP8AAj2IFmz/DbYAAAAASUVORK5CYII="
                    alt=""
                  />
                  <img
                    className="h-[20px]"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <img
                    className="h-[20px]"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <img
                    className="h-[20px]"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-500">Baholanmagan</h1>
              </div>
              <button className="bg-red-500 px-[7px] text-[16px] rounded-[20px] text-white">
                -10%
              </button>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <div className="flex items-start flex-col">
                <div className="flex justify-between w-[80%]">
                  <div className="flex items-start flex-col">
                    <div className="flex flex-col gap-[10px]">
                      <h1 className="text-[14px]">
                        Muddatli to'lovga sotib olish
                      </h1>
                      {/* narxi */}
                      <div className="flex gap-[10px]">
                        <h2
                          className="text-2xl font-medium"
                          id={
                            toggleState === 1
                              ? "content active-content"
                              : "content"
                          }
                        >
                          {parseInt(data.price / 3).toLocaleString("ru")} so'm
                          oyiga
                        </h2>
                        <h2
                          className="text-2xl font-medium"
                          id={
                            toggleState === 2
                              ? "content active-content"
                              : "content"
                          }
                        >
                          {parseInt(data.price / 6).toLocaleString("ru")} so'm
                          oyiga
                        </h2>
                        <h2
                          className="text-2xl font-medium"
                          id={
                            toggleState === 3
                              ? "content active-content"
                              : "content"
                          }
                        >
                          {parseInt(data.price / 12).toLocaleString("ru")} so'm
                          oyiga
                        </h2>
                        <h2
                          className="text-2xl font-medium"
                          id={
                            toggleState === 4
                              ? "content active-content"
                              : "content"
                          }
                        >
                          {parseInt(data.price / 18).toLocaleString("ru")} so'm
                          oyiga
                        </h2>
                        <h2
                          className="text-2xl font-medium"
                          id={
                            toggleState === 5
                              ? "content active-content"
                              : "content"
                          }
                        >
                          {parseInt(data.price / 24).toLocaleString("ru")} so'm
                          oyiga
                        </h2>
                      </div>
                      {/* narxi */}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h1>narx</h1>
                    <b className="text-2xl text-red-500">
                      {parseInt(data.price).toLocaleString("ru")}so'm
                    </b>
                    <del>
                      {parseInt(data.price / 2).toLocaleString("ru")}so'm
                    </del>
                  </div>
                </div>
                {/* muddatli tolov */}
                <div className="flex gap-[10px]">
                  <div
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={(e) => {
                      toggleTab(1);
                      handleClick(e);
                    }}
                  >
                    <h1>3 oyga</h1>
                  </div>
                  <div
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => {
                      toggleTab(2);
                    }}
                  >
                    <h1>6 oyga</h1>
                  </div>
                  <div
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => {
                      toggleTab(3);
                    }}
                  >
                    <h1>12 oyga</h1>
                  </div>
                  <div
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => {
                      toggleTab(4);
                    }}
                  >
                    <h1>18 oyga</h1>
                  </div>
                  <div
                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                    onClick={() => {
                      toggleTab(5);
                    }}
                  >
                    <h1>24 oyga</h1>
                  </div>
                </div>
                {/* muddatli tolov */}
              </div>
              <button
                onClick={() => onAdd(data)}
                className="bg-red-700 text-white rounded-[10px] px-2 py-1"
              >
                add to basket
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountMicPage;
