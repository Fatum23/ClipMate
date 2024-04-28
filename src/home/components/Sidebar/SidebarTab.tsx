import React, { Dispatch, SetStateAction } from "react";

export default function SidebarTab(props: {
  title: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      onClick={() => props.setActiveTab(props.title)}
      className="[transition:background-color_0.3s] [direction:ltr] hover:bg-light rounded pl-2 py-1 pr-1 flex flex-row justify-start"
    >
      {props.title}
    </button>
  );
}
