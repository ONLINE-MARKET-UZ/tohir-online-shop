import React from 'react';
import USA from "../assets/images/USA.svg"

const Last = () => {
    return (
        <div className='bg-[#EFF2F4] h-[68px] rounded-md'>

            <div className="flex  justify-between py-[22px] items-center" >
     
            <p>© 2023 Ecommerce. </p>

            <div className='flex'>
                <img src={USA} alt="" />
                <select name="" id="">
                    <option value="English">English</option>
                    <option value="English">Russian</option>

                </select>
            </div>
            
            </div>
            
        </div>
    );
};

export default Last;