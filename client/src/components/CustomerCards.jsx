import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "next-themes";
import { MagicCard } from "./ui/magic-card";

const CustomerCards = ({ percentage, activeCustomerPercentage }) => {
  const { theme } = useTheme();
  return (

    <div className="flex flex-col items-center justify-center md:w-[270px] md:h-[400px] w-full  h-auto bg-primary2 rounded-md shadow-md">
       <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#64646429"}
      >
      <h2 className="text-gray-700 font-semibold text-xl mb-12">Customers</h2>
      <div className="w-32 h-3w-32 mb-4">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#000", // text color
            pathColor: "#8b5cf6", // progress path color
            trailColor: "#e5e7eb", // background path color
          })}
        />
      </div>
      <p className="text-gray-700 text-sm font-semibold">New Customer This Month</p>
      <p className="text-gray-500 text-sm font-semibold mt-4">
        Active Customer  
      </p>
      <span className="font-semibold text-2xl">{activeCustomerPercentage}%</span>
      </MagicCard>
    </div>
  );
};

export default CustomerCards;