import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#09050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Address
            </h1>
            <p className="text-[16px] w-[90%] text-white opacity-60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
              tempore.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Phone
            </h1>
            <p className="text-[16px] w-[90%] text-white opacity-60">
              +57 3142507099
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Send us Email
            </h1>
            <p className="text-[16px] w-[90%] text-white opacity-60">
              example@example.com <br /> example2@example.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          V4roah | All Rights Reserverd
        </div>
        <div className="flex item-center space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
