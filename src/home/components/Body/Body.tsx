import React, { useMemo } from "react";
import Card from "./Card";

export default function Body() {
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
  ];
  const memoizedData = useMemo(() => data, [data]);
  return (
    <div className="flex-grow flex flex-col items-center overflow-y-auto">
      {memoizedData.map((item) => (
        <Card key={item} content={item} />
      ))}
    </div>
  );
}
