import React, { useContext, useEffect, useState } from "react";
import { getAllChannels, getDmUsers } from "../API";
import { CardConversation } from "./Cards";
import { SearchIcon } from "./Icons";
import { MessagesContext } from "./Routes/Messages";
import Spinner from "./Spinner";

export default function Chats() {
  const conversations = useContext(MessagesContext);
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <div className="flex h-full flex-col  gap-6">
      <div className="flex h-full relative flex-col overflow-auto">
        {conversations.dataDm.map((e: any, index: number) => {
          return <CardConversation data={e} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}
