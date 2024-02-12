"use client";

import { FaRegSnowflake, FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="flex justify-start">
      <div className="w-[70px] h-screen pt-10 flex flex-col space-y-10 items-center bg-purple-700">
        <FaRegSnowflake color="white" size={30} />
        <FaHome color="#dcdcdc" size={20} />
        <IoChatbubbleEllipsesOutline color="#dcdcdc" size={20} />
        <FaUser color="#dcdcdc" size={20} />
        <IoIosSettings color="#dcdcdc" size={20} />
      </div>
      <div className="w-[250px] h-screen bg-gray-100">
        {(() => {
          const list = [];
          for (let i = 1; i <= 20; i++) {
            list.push(
              <p key={i} className="p-4 border-b">
                hello world{i}.
              </p>
            );
          }
          return <div className="h-screen overflow-y-auto">{list}</div>;
        })()}
      </div>
    </div>
  );
};

export default Sidebar;
