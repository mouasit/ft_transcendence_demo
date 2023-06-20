import React from "react";

interface TypeIndex {
  index: number;
  active: any;
  setActive: any;
}

export default function ButtonLIve(index: TypeIndex) {
  return (
    <button
      className={`w-72 h-48 bg-shape rounded-xl flex-shrink-0 hover:bg-opacity-[.5] ${
        index.active === index.index?"border-4 border-primary":""
      }`}
      onClick={() => {
        index.setActive(index.index);
      }}
    ></button>
  );
}
