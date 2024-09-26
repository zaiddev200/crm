import React from "react";

const SmallCards = ({ name, tcolor }) => {
  return (
    <>
      <div className="w-[270px] h-[120px] rounded-lg border-gray-100 shadow-md bg-primary2">
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
      </div>
    </>
  );
};

export default SmallCards;
