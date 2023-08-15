import logo from "../assets/logo/logo.svg";

import { Select, Input, Button } from "antd";

import "./style.scss";
// const { Search } = Input;
const HeaderTop = () => {
  return (
    <div className=" border-y">
      <ul className="heading_brand flex  py-5">
        <li className="mr-[35px] flex items-center  ">
          <img src={logo} alt="" className="" />
        </li>
        <li className="flex border rounded-[8px] mr-[80px] items-center border-[#0067FF]">
          <Input
      
            placeholder="Search"
            className="outline-none w-[406px] rounded-none border border-[#0067FF] "
            bordered={false}
          />
          <Select
            className="h-[40px] items-center "
            bordered={false}
            labelInValue
            defaultValue={{ value: "All category", label: "All category" }}
            style={{ width: 145, height: 40 }}
            options={[
              { value: "All category", label: "All category" },
              { value: "Clothes and wear", label: "Clothes and wear" },
              { value: "Home interiors", label: "Home interiors" },
              { value: "Computer and tech", label: "Computer and tech" },
              { value: "Tools, equipments", label: "Tools, equipments" },
              { value: "Sports and outdoor", label: "Sports and outdoor" },
              { value: "Animal and pets", label: "Animal and pets" },
              { value: "Machinery tools", label: "Machinery tools" },
              { value: "More category", label: "More category" },
            ]}
          />

          <Button type="primary" className=" w-[100px] bg-[#0067FF] h-full">
            Search
          </Button>
        </li>
        <li className="items-center flex">
          <ul className="flex gap-[15px]  items-center">
            <li className="items-center flex flex-col justify-between hover:text-[#0D6EFD]">
              <i class="bx bxs-user"></i>
              <p className="text-[12px] text-[#8B96A5] hover:text-[#0D6EFD]">Profile</p>
            </li>
            <li  className="items-center flex flex-col justify-between hover:text-[#0D6EFD]">
              <i class="bx bxs-comment-minus"></i>
              <p className="text-[12px] text-[#8B96A5] hover:text-[#0D6EFD]">Message</p>
            </li>
            <li className="items-center flex flex-col justify-between hover:text-[#0D6EFD]">
              <i class="bx bxs-heart"></i>
              <p className="text-[12px] text-[#8B96A5] hover:text-[#0D6EFD]">Orders</p>
            </li>
            <li className="items-center flex flex-col justify-between hover:text-[#0D6EFD]"  >
              <i class="bx bxs-cart-alt"></i>
              <p className="text-[12px] text-[#8B96A5] hover:text-[#0D6EFD]">My cart</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
