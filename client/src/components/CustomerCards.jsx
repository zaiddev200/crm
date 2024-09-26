import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CustomerCards = ({ percentage, activeCustomerPercentage }) => {
  return (
    <div className="flex flex-col items-center justify-center md:w-[270px] md:h-[400px] w-full p-3 h-auto bg-primary2 rounded-md shadow-md">
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
    </div>
  );
};

export default CustomerCards;