import React, { createContext, useContext, useEffect, useState } from "react";
import { getMembersChannel } from "../../API";
import { ExclamationIcon } from "../Icons";
import InputSearchMembers from "../InputSearchMembers";
import MembersContainer from "../MembersContainer";
import { MessagesContext } from "../Routes/Messages";
import Spinner from "../Spinner";

export const MembersContext = createContext<any>({});
export default function Members() {
  const messageData = useContext(MessagesContext);
  const [members, setMembers] = useState<any>([]);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    getMembersChannel((res: any) => {
      setMembers(res);
      setRender(true);
    }, messageData.dataChatBox.name);
  }, []);
  return (
    <MembersContext.Provider value={{ setMembers: setMembers }}>
      <div className="pt-5 w-full flex flex-col gap-6">
        <MembersContainer data={members} />
      </div>
    </MembersContext.Provider>
  );
}
