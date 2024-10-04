import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "./ui/magic-card";
 

const SmallCards = ({ name, tcolor }) => {
  const { theme } = useTheme();
  return (
    <>
      <div className="sm:w-[270px] w-full  sm:h-[120px] h-auto  rounded-lg border-gray-100 shadow-md bg-primary2">
    <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#64646429"}
      >
        <div className="w-full h-16 flex justify-center items-center border-b border-gray-100">
          <h2 className="text-xl font-sans font-semibold text-gray-700">
            {" "}
            {name}
          </h2>
        </div>
        <div className="w-full flex h-12  justify-around items-center">
          <h3 className="text-gray-600 font-semibold text-sm">This Month</h3>
          <div className="w-[1px] h-5 bg-gray-200"></div>
          <div
            className="w-auto px-2 py-1 h-auto rounded-md border-2 "
            style={{ color: tcolor, borderColor: tcolor }}
            >
            <h4 className=" font-semibold text-xs ">$ 00.00</h4>
          </div>
        </div>
            </MagicCard>
      </div>
    </>
  );
};

export default SmallCards;
