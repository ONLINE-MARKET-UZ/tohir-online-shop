import german from "../assets/icons/german.svg";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li className="flex justify-between items-center text-[16px] py-[17px] font-[500] leading-[22px]">
          <ul className="flex justify-between items-center gap-[25px]">
           
            <li className="hover:underline hover:text-[#0D6EFD] "> <i class='bx bx-menu' ></i>All category</li>
            <li className="hover:underline hover:text-[#0D6EFD] ">Hot offers</li>
            <li className="hover:underline hover:text-[#0D6EFD] ">Gift boxes</li>
            <li className="hover:underline hover:text-[#0D6EFD] "> Projects</li>
            <li className="hover:underline hover:text-[#0D6EFD] "> Menu item</li>
            <li className="hover:underline hover:text-[#0D6EFD] ">
              {" "}
              Help <i class="bx bxs-chevron-down"></i>{" "}
            </li>
          </ul>
          <ul className="flex justify-between items-center gap-8  ">
            <li className="hover:underline hover:text-[#0D6EFD]">
              English, USD <i class="bx bxs-chevron-down"></i>{" "}
            </li>
            <li className="flex hover:underline hover:text-[#0D6EFD] gap-[2px]">
              Ship to
              <img src={german} alt="" srcset="" /> <i class="bx bxs-chevron-down"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
