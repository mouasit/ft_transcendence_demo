import React, { useEffect, createContext, useState } from "react";
import Navigation from "../Navigation/Navigation";
import fire from "../../assets/fire.png";
import { CheckToken, getDataUserLogged } from "../../API";
import Spinner from "../Spinner";
import { Link, useNavigate } from "react-router-dom";
import ButtonLIve from "../ButtonLIve";
// import { io } from "socket.io-client";
// import { globalSocket } from "../../App";
// import { Socket } from "socket.io-client";
const domain = process.env.REACT_APP_DOMAIN;
interface TypeData {
  id: string;
  pictureURL: string;
  nickname: string;
  isTwoFactorAuthEnabled: boolean;
  status: string;
}

interface TypeContext {
  value: boolean;
  settings: TypeData;
  updateSettings: React.Dispatch<React.SetStateAction<TypeData>>;
}

export const ActiveHome = createContext<TypeContext>({
  value: false,
  settings: {
    id: "",
    pictureURL: "",
    nickname: "",
    isTwoFactorAuthEnabled: false,
    status: "offline",
  },
  updateSettings: () => {},
});

export default function Home() {
  const [active, setActive] = useState(0);
  const listButtons = [1,2,3]
  const [settings, setSettings] = useState<TypeData>({
    id: "",
    pictureURL: "",
    nickname: "",
    isTwoFactorAuthEnabled: false,
    status: "offline",
  });

  useEffect(() => {
    document.title = "Pong - Home";
    getDataUserLogged((res: TypeData) => {
      setSettings(res);
    });
  }, []);
  
  return (
    <ActiveHome.Provider
      value={{ value: true, settings: settings, updateSettings: setSettings }}
    >
      <Navigation />
      <main className="mx-3 pb-20 lg:pb-1 pt-10 lg:ml-64 lg:mr-4">
        <div className="flex flex-col gap-5 w-full h-full">
          <h1 className="text-primaryText text-2xl flex items-center gap-1.5">
            <span>Live Games🔥</span>
          </h1>
          <section className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <button className="w-full h-96 lg:h-full bg-shape rounded-xl lg:flex-1 primary-live"></button>
            <div className="flex gap-4 lg:flex-col live-list overflow-auto lg:overflow-x-hidden pb-6 lg:pb-0">
              {listButtons.map((e, index) => {
                return (
                  <ButtonLIve
                    index={index}
                    key={index}
                    active={active}
                    setActive={setActive}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </ActiveHome.Provider>
  );
}
