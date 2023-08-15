import React from 'react';


const Subscribe = () => {
    return (
        <div className='flex flex-col items-center bg-[#EFF2F4] mt-[38px]'>
            <h3 className='text-[20px] mt-[38px] font-semibold leading-7'>Subscribe on our newsletter</h3>
            <p className='text-[16px] font-normal leading-6 mb-[21px]'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className='flex items-center gap-[8px] mb-[39px]'>
          <div className="border rounded-md flex items-center bg-[#fff] gap-[6px] py-[9px] px-[8px]">  
          <i class='bx bx-envelope'></i>
            <input type="email" className='outline-none' placeholder='Email' />
            </div>
            <button className='bg-[#0D6EFD] px-[16px] py-[8px] active:bg-[#10366e] flex items-center  text-white rounded-md text-[16px] font-medium'>Subscribe</button>
            </div> 
        </div>
    );
};

export default Subscribe;