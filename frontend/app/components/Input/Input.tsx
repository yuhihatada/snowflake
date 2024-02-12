"use client";

import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { FC, useState } from "react";

type Props = {
  updateMessages: any;
  setIsLoading: any;
};

const Input: FC<Props> = ({ updateMessages, setIsLoading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    updateMessages(true, inputValue);
    const response = await axios.post(
      "/api/chat",
      {
        message: inputValue,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    updateMessages(false, response.data.text);
    setIsLoading(false);
  };

  return (
    <div className="fixed flex jutify-center items-center right-[50px] left-[370px] bottom-[30px] space-x-2">
      <input
        type="text"
        id="chat"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Type a message"
      />
      <IoIosSend
        size={38}
        className="fixed right-[60px] p-1 text-purple-700 cursor-pointer hover:opacity-80"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Input;
