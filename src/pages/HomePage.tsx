import { useEffect, useState } from "react";
import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";
import Body from "../widgets/Body/Body";
import { TypeContextMenu } from "@types";
import { ContextMenu } from "@features";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("");

  const [contextMenu, setContextMenu] = useState<TypeContextMenu>({
    type: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (contextMenu.type !== "") {
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.pointerEvents = "auto";
    }
  }, [contextMenu]);

  return (
    <div className="w-[100vw] h-[100vh] bg-default flex flex-row overflow-hidden">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col w-full">
        <Header title={activeTab} />
        <Body contextMenu={contextMenu} setContextMenu={setContextMenu} />
      </div>
      <ContextMenu contextMenu={contextMenu} setContextMenu={setContextMenu} />
    </div>
  );
}
