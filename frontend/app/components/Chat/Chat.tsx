"use client";

import { Message } from "components/Message";
import { Input } from "components/Input";
import { AiOutlineRobot } from "react-icons/ai";
import { useState } from "react";

type MessageText = {
  me?: boolean;
  text: string;
};

const Chat = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderKey, setRenderKey] = useState<number>(0);
  const [messages, setMessages] = useState<MessageText[]>([
    {
      text: "何か手伝えることはありますか",
    },
  ]);

  const updateMessages = (me: boolean, text: string) => {
    const saveArray = messages;
    saveArray.push({
      me: me,
      text: text,
    });
    setMessages(saveArray);
    setRenderKey(getCurrentSecond());
  };

  function getCurrentSecond() {
    const currentDate = new Date();
    return currentDate.getSeconds();
  }

  return (
    <div
      key={renderKey}
      className="w-full h-screen p-10 flex-col overflow-y-auto pb-[100px]"
    >
      <div className="w-full">
        {messages.map((message, i) => {
          return <Message key={i} message={message} />;
        })}
      </div>
      {isLoading && (
        <div className="flex justify-start items-center">
          <AiOutlineRobot
            color="black"
            size={25}
            className="p-1 mr-1 bg-gray-200 rounded-full"
          />
          <div className="ml-3 flex justify-start" aria-label="読み込み中">
            <div className="animate-ping h-1 w-1 bg-purple-700 rounded-full"></div>
            <div className="animate-ping h-1 w-1 bg-purple-700 rounded-full mx-3"></div>
            <div className="animate-ping h-1 w-1 bg-purple-700 rounded-full"></div>
          </div>
        </div>
      )}
      <Input updateMessages={updateMessages} setIsLoading={setIsLoading} />
    </div>
  );
};

export default Chat;
