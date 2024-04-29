import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import { TypeContent, TypeContextMenu } from "./types";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("");

  const [contextMenu, setContextMenu] = useState<TypeContextMenu>({
    type: "",
    x: 0,
    y: 0,
  });

  return (
    <div
      onClick={() => setContextMenu({ type: "", x: 0, y: 0 })}
      className="w-[100vw] h-[100vh] bg-default flex flex-row overflow-hidden"
    >
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col w-full">
        <Header title={activeTab} />
        <Body contextMenu={contextMenu} setContextMenu={setContextMenu} />
      </div>
      <ContextMenu contextMenu={contextMenu} />
    </div>
  );
}
