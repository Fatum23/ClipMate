import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="w-[100vw] h-[100vh] bg-default flex flex-row overflow-hidden">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col w-full">
        <Header title={activeTab} />
        <Body />
      </div>
    </div>
  );
}
