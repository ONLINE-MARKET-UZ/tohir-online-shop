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
        <p className="hover:underline hover:text-[#0D6EFD]">Smart watches</p>
        <p className="text-[#EB001B] hover:shadow-red-600 active:shadow-red-600 bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-25%</p>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Laptops} alt="" />
        <p className="hover:underline hover:text-[#0D6EFD]">Laptops</p>
        <p className="text-[#EB001B] hover:shadow-red-600 active:shadow-red-600 bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-15%</p>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Gopro} alt="" />
        <p className="hover:underline hover:text-[#0D6EFD]">GoPro cameras</p>
        <p className="text-[#EB001B] hover:shadow-red-600 active:shadow-red-600 bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-40%</p>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Headphones} alt="" />
        <p className="hover:underline hover:text-[#0D6EFD]">Headphones</p>
        <p className="text-[#EB001B] hover:shadow-red-600 active:shadow-red-600 bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-25%</p>
      </li>
      <li className="pt-5 py-5 flex flex-col items-center w-[179px] border h-[235px]">
        <img className="w-[121px] h-[121px] mb-[11px]" src={Canon} alt="" />
        <p className="hover:underline hover:text-[#0D6EFD]">Canon camreras</p>
        <p className="text-[#EB001B] hover:shadow-red-600 active:shadow-red-600 bg-[#FFE3E3] pt-[3px] px-[13px] rounded-2xl">-25%</p>
      </li>
    </ul>
  );
};

export default CardOffers;
