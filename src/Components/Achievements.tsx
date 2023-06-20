import React, { useEffect, useState } from "react";
import { getAchievements } from "../API";
import { CardAchievments } from "./Cards";
import { Trophy } from "./Icons";
import Spinner from "./Spinner";

interface TypeProps {
  id?: string;
}

export default function Achievements({ id }: TypeProps) {
  const [achievements, setAchievements] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    if (id)
      getAchievements((res: any) => {
        setRender(true);
        setAchievements(res);
      }, id);
  }, []);

  return (
    <div className="flex pt-10 content-profile lg:pb-10 flex-col gap-10 md:gap-16">
      <div className="flex items-center flex-col gap-10 justify-around w-full md:flex-row md:gap-5">
        <CardAchievments type="trophy" />
        <CardAchievments type="pointgame" />
      </div>
      <div className="flex items-center flex-col gap-10 justify-around w-full md:flex-row md:gap-5">
        <CardAchievments type="lose" />
        <CardAchievments type="firstWin" />
      </div>
    </div>
  );
}
