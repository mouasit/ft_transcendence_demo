import React from "react";
import { Trophy, PointGameIcon, LoseIcon, FirstWinIcon } from "./Icons";
let trophy = <Trophy edit="w-8 h-8 absolute fill-primary" />;
let pointgame = <PointGameIcon edit="w-10 h-10 absolute fill-primary" />;
let lose = <LoseIcon edit="w-11 h-11 absolute fill-primary" />;
let firstWin = <FirstWinIcon edit="w-11 h-11 absolute fill-primary" />;

export default function CircleAchievements({ type }: any) {
  return (
    <div className="flex justify-center items-center rounded-full border-4 border-primary w-20 h-20">
      {type.type === "trophy"
        ? trophy
        : type.type === "pointgame"
        ? pointgame
        : type.type === "lose"
        ? lose
        : firstWin}
    </div>
  );
}
