import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="3xl font-semibold">Abhinav👋</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 transition duration-300 ease-in-out">
        Log Out
      </button>
    </div>
  );
};
export default Header;
