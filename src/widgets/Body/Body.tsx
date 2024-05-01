import { Dispatch, SetStateAction, useMemo } from "react";
import { Card } from "@entities";
import { TypeContextMenu } from "@types";

export default function Body(props: {
  contextMenu: TypeContextMenu;
  setContextMenu: Dispatch<SetStateAction<TypeContextMenu>>;
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
    "пароль",
    "#fff",
    "red",
    "#43464a",
    "https://youtube.com/",
  ];
  const memoizedData = useMemo(() => data, [data]);
  return (
    <div
      onScroll={() => props.setContextMenu({ type: "", x: 0, y: 0 })}
      className="flex-grow flex flex-col items-center overflow-y-auto"
    >
      {memoizedData.map((item) => (
        <Card
          key={item}
          card={{ content: item }}
          contextMenu={props.contextMenu}
          setContextMenu={props.setContextMenu}
        />
      ))}
    </div>
  );
}
