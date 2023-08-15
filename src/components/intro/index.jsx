import CarouselIntro from "./Carousel";
import MenuBar from "./Menu";
const index = () => {
  return (
    <section className="">
      <div className="  ">
        <div className="intro_wrapper border border-[#DEE2E7] rounded-md flex  bg-white py-5 pr-5 pl-[14px] h-[420px] gap-[10px]">
          <MenuBar />
          <CarouselIntro />
          <div className="ml-[10px] flex flex-col justify-between">
            <div className="card w-[180px] h-[110px] bg-[#F38332] rounded-md p-4  hover:shadow-2xl text-white">
              <p className="text-white">Get US $10 off with a new supplier</p>
            </div>
            <div className="card w-[180px] h-[110px] bg-[#55BDC3] rounded-md p-4 hover:shadow-2xl text-white">
              <p className="text-white">Get US $10 off with a new supplier</p>
            </div>
            <div className="card w-[180px] h-[110px] bg-[#127FFF] rounded-md p-4 hover:shadow-2xl text-white">
              <p className="text-white">Send quotes with supplier preferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
