import React from "react";

const Subnavbar = () => {
  return (
    <div className="bg-[#12263f] text-white mt-[38px] mr-[-24px] ml-[-21px] px-0 shadow-md py-3 md:py-0 md:h-[111px]">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        {/* Date Input */}
        <div className="w-full md:w-auto flex justify-center md:block">
          <input
            placeholder="08/05/2025 - 10/05/2025"
            className="w-[300px] px-3 py-2 text-sm cursor-pointer rounded-md border border-gray-300 font-semibold md:mt-6 md:ml-10 text-black focus:outline-none"
          />
        </div>

        {/* Dashboard Title */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-between md:pr-[50px] md:pt-7 mt-2 md:mt-0">
          <p className="text-2xl md:text-3xl font-semibold">Dashboard</p>
          <i className="bi bi-question-square-fill text-2xl cursor-pointer pl-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
