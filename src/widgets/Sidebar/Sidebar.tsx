import { Dispatch, SetStateAction } from "react";
import SidebarTab from "./SidebarTab";

export default function Sidebar(props: {
  setActiveTab: Dispatch<SetStateAction<string>>;
}) {
  const data = [
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "паролььььььььььььььььььььььььььььььььььььььььььььььь",
  ];
  return (
    <div className="[direction:rtl] min-h-full overflow-y-auto bg-dark w-[33%] break-all p-1 flex flex-col gap-1">
      {data.map((item) => (
        <SidebarTab key={item} title={item} setActiveTab={props.setActiveTab} />
      ))}
    </div>
  );
}
