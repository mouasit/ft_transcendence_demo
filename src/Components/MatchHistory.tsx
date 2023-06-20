import React, { useEffect, useState } from "react";
import { getMatchHistory } from "../API";
import MatchHistoryUser from "./MatchHistoryUser";
import Spinner from "./Spinner";

interface TypdProps {
  id?: string;
}

export default function MatchHistory({ id }: TypdProps) {
  const [matchHistory, setMatchHistory] = useState<[]>([]);
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    if (id)
      getMatchHistory((res: any) => {
        setMatchHistory(res);
        setRender(true);
      }, id);
  }, []);
      return (
        <div className="pt-5 pb-[7.6rem] lg:pb-[2.7rem] flex">
          <table className="table w-full ">
            <thead>
              <tr className="rounded-xl bg-body font-medium text-primaryText shadow">
                <th className="rounded-xl p-4 text-left">Players</th>
                <th className="p-4">Score</th>
                <th className="rounded-xl p-4">Stat</th>
              </tr>
            </thead>
            <tbody>
              {matchHistory.map((e: any, index: number) => {
                return <MatchHistoryUser data={e} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      );
}
