import React from "react";

const Subnavbar = () => {
  return (
    <div className="bg-[#12263f] text-white mt-[38px]  mr-[-24px] ml-[-21px] px-0 py-0 shadow-md h-[111px]  ">
      <div className="flex justify-between items-center">
        
        {/* Date Input */}
        <input 
          placeholder="08/05/2025 - 10/05/2025"
          className=" w-[300px] px-3 py-2  text-sm cursor-pointer rounded-md border border-gray-300 font-semibold mt-6 ml-10 text-black  focus:outline-none "
        />

        {/* Dashboard Title */}
        <div className="flex items-center justify-between pr-[50px] pt-7">
  <p className="text-3xl font-semibold">Dashboard</p>
  <i className="bi bi-question-square-fill text-2xl cursor-pointer pl-2"></i>
</div>

      </div>
    </div>
  );
};

export default Subnavbar;
