import React from "react";

import "./style.scss";
const index = () => {
  return (
    <section className="offerformsec h-[446px] mt-[51px] rounder-lg">
      <ul className="flex justify-between">
        <li className="p-10">
          <ul className="text-white">
            <h2 className="text-[32px] font-semibold w-[440px]">
              An easy way to send requests to all suppliers{" "}
            </h2>
            <p className="leading-6 w-[390px] text-[16px] font-normal lorem">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </ul>
        </li>
        <li className="p-10">
          <ul className="bg-white flex flex-col p-[21px]">
            <h3 className="text-[20px] leading-7 font-semibold">
              Send quote to suppliers
            </h3>
            <input
              type="text"
              className="p-[10px] mt-[18px]  border-[#DEE2E7] border rounded-md"
              placeholder="What item you need?"
            />
            <textarea
              className="flex mt-[20px] items-start w-[440px] h-[73px] p-[10px]border-[#DEE2E7] border rounded-md"
              placeholder="Type more details"
            ></textarea>
            <div className="klkl mt-[20px]  gap-[8px]">
              <input   className="p-[10px] mr-[8px] text-black border-[#DEE2E7] border rounded-md"
                type="number"
                placeholder="Quantity"
              />
              <select className="p-[12px] hover:shadow-md border-[#DEE2E7] border rounded-md" name="" id="">
                <option value="Pcs">Pcs</option>
                <option value="Pcs">Pcs</option>
              </select>
            </div>
            <button className="text-white mt-[20px] text-[16px] rounded-md hover:shadow-cyan-900 hover:shadow-lg active:bg-[#10366e] bg-[#127FFF] px-4 w-[128px] h-[40px]">Send inquiry</button>
          </ul>
        </li>
      </ul>
    </section>
  );
};
export default index;
