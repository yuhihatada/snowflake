"use client";

import { FC } from "react";
import { AiOutlineRobot } from "react-icons/ai";

type MessageText = {
  me?: boolean;
  text: string;
};

type Props = {
  message: MessageText;
};

const Message: FC<Props> = ({ message: { me = false, text } }) => {
  return (
    <div className={`flex my-4 ${me ? "justify-end" : "justyfi-start"}`}>
      {!me && (
        <AiOutlineRobot
          color="black"
          size={25}
          className="p-1 mr-1 bg-gray-200 rounded-full"
        />
      )}
      <div
        className={`px-4 py-1 w-fit shadow rounded-2xl ${
          me ? "bg-purple-700 text-white" : "bg-gray-200"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
