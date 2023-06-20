import React, { useContext, useEffect, useState, createContext } from "react";
import { getFriendChannel } from "../../API";
import FriendMember from "../FriendMember";
import { ExclamationIcon } from "../Icons";
import InputSearchMembers from "../InputSearchMembers";
import { MessagesContext } from "../Routes/Messages";
import Spinner from "../Spinner";

export const AddMemberContext = createContext<any>({});

export default function AddMember() {
  const messageData = useContext(MessagesContext);
  const [friend, setFriend] = useState<any>([]);
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    getFriendChannel((res: any) => {
      setFriend(res);
      setRender(true);
    }, messageData.dataChatBox.name);
  }, []);
  return (
    <AddMemberContext.Provider value={{ setFriend: setFriend }}>
      <div className="pt-5 w-full flex flex-col gap-6">
        <FriendMember data={friend} />
      </div>
    </AddMemberContext.Provider>
  );
}
