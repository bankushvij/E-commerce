import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { HiSupport } from "react-icons/hi";
import { BsHeadphones } from "react-icons/bs";

function Tab() {
  const [tab] = useState([
    {
      icon: <AiFillCar />,
      title: "Free Shipping",
      desc: "For all order over $99",
    },
    {
      icon: <BiMoney />,
      title: "Money Back Guarantee",
      desc: "If good have Problems",
    },
    {
      icon: <HiSupport />,
      title: "Online Support 24/7",
      desc: "Dedicated support",
    },
    {
      icon: <BsHeadphones />,
      title: "Payment Secure",
      desc: "100% secure payment",
    },
  ]);
  return (
    <div className="m-12 p-4">
      <div className="hidden lg:flex flex-wrap gap-4 w-100 h-100 ">
        <div className="flex text-xl  justify-between items-center gap-10 ">
          {tab.map((data) => (
            <>
              <div className="flex flex-wrap m-2">
                <span className="w-16 h-16 text-4xl text-red-900">{data.icon}</span>
                <span className="flex flex-col gap-1 text-black">
                  <span className="text-md font-medium ">{data.title}</span>

                  <span className="text-sm font-light">{data.desc}</span>
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tab;
