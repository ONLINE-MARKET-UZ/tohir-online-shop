import React from "react";
import Logo from "../assets/images/logo-colored.svg";
import Apple from "../assets/images/appstore.svg"
import Google from "../assets/images/google_play.svg"


const GetApp = () => {
  return (
    <div>
      <ul className="flex mt-10 mb-[59px] justify-between">
        <li>
          <ul>
            <img className="w-[150px] h-[46px] " src={Logo} />
            <p className="py-[15px] w-[276px] text-[16px] font-normal leading-6">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <li className="flex gap-[10px]">
              <i className="w-8 h-8 bx bxl-facebook-circle"></i>
              <i className="w-8 h-8 bx bxl-twitter"></i>
              <i className="w-8 h-8 bx bxl-linkedin"></i>
              <i className="w-8 h-8 bx bxl-instagram"></i>
              <i className="w-8 h-8 bx bxl-youtube"></i>
            </li>
          </ul>
        </li>
       <li className="flex gap-20">
       <ul>
          <li className="mb-[10px]"><strong>About</strong></li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">About Us</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Find store</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Categories</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Blogs</li>
        </ul>
        <ul>
          <li className="mb-[10px]"><strong>Partnership</strong></li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">About Us</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Find store</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Categories</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Blogs</li>
        </ul>
        <ul>
          <li className="mb-[10px]"><strong>Information</strong></li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">About Us</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Find store</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Categories</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Blogs</li>
        </ul>
        <ul>
        <li className="mb-[10px]"><strong>For users</strong></li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">About Us</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Find store</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Categories</li>
          <li className=" text-[16px] text-[#8B96A5] font-normal leading-6">Blogs</li>
        </ul>

<ul>
<li className="mb-[10px]"><strong>Get app</strong></li>
<img className="mb-[8px]" src={Apple} alt="" />

<img src={Google} alt="" />

</ul>



       </li>

      
      </ul>
    </div>
  );
};

export default GetApp;
