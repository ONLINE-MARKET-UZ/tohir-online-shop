import React from "react";
import Smart from "../assets/images/smart.svg";
import Laptops from "../assets/images/laptops.svg";
import Gopro from "../assets/images/Gopro.svg";
import Headphones from "../assets/images/headphones.svg";
import Canon from "../assets/images/canon.svg";

const CardOffers = () => {
  return (
    <ul className="flex">
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Smart} alt="" />
        <p>Smart watches</p>
        <span className="text-[#EB001B] bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-25%</span>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Laptops} alt="" />
        <p>Laptops</p>
        <span className="text-[#EB001B] bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-15%</span>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Gopro} alt="" />
        <p>GoPro cameras</p>
        <span className="text-[#EB001B] bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-40%</span>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Headphones} alt="" />
        <p>Headphones</p>
        <span className="text-[#EB001B] bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-25%</span>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Canon} alt="" />
        <p>Canon camreras</p>
        <span className="text-[#EB001B] bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-25%</span>
      </li>
    </ul>
  );
};

export default CardOffers;
