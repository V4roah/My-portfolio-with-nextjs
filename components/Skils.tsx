import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem title="React Developer" year="2024-2028" />
          <SkilsItem title="MERN Stack Developer" year="2028-2030" />
          <SkilsLanguage
            skill1="html"
            skill2="css"
            skill3="javscript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkilsItem title="NodeJs Developer" year="2014-2018" />
          <SkilsItem title="Python Developer" year="2018-2020" />
          <SkilsLanguage
            skill1="ReactJs"
            skill2="NextJs"
            skill3="TypeScript"
            level1="w-[50%]"
            level2="w-[60%]"
            level3="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
