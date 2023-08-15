import CardOffers from "./CardOffers";
import "./style.scss";
const index = () => {
  return (
    <section>
      <div className="">
        <div className="offers border rounded-lg mt-[30px] ">
          {/* <div className="offers_info">

          </div> */}
          <ul className="flex justify-between  h-[235px]">
            <li className="flex border pt-5 pl-5 w-[281px] h-[235px] ">
              <ul className="flex   flex-col">
                <li className="mb-[18px]">
                  <h2 className="text-[20px] font-semibold leading-7">
                    Deals and offers
                  </h2>
                  <p className="text-[16px] text-[#8B96A5] ">
                    Hygiene equipments
                  </p>
                </li>
                <ul className="flex gap-[6px]">
                  <li className="bg-[#606060] pt-[3px] text-white w-[45px] h-[50px] flex flex-col items-center rounded ">
                    <p className="font-bold text-[16px]">04</p>
                    <span className="text-[12px]">Days</span>
                  </li>
                  <li className="bg-[#606060] pt-[3px] text-white w-[45px] h-[50px] flex flex-col items-center rounded ">
                    <p className="font-bold text-[16px]">13</p>
                    <span className="text-[12px]"> Hour</span>
                  </li>

                  <li className="bg-[#606060] pt-[3px] text-white w-[45px] h-[50px] flex flex-col items-center rounded ">
                    <p className="font-bold text-[16px]">34</p>
                    <span className="text-[12px]">Min</span>
                  </li>
                  <li className="bg-[#606060] pt-[3px] text-white w-[45px] h-[50px] flex flex-col items-center rounded ">
                    <p className="font-bold text-[16px]">56</p>
                    <span className="text-[12px]">Sec</span>
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <CardOffers />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
