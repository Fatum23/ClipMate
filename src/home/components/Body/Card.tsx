import moment from "moment";
import React, { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { MdDelete } from "react-icons/md";

type TypeCard = {
  content: string;
};

export default function Card(props: TypeCard) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[90%] min-h-16 p-1 bg-dark my-2 rounded flex flex-row justify-between [transition:background-color_0.5s_ease,transform_0.1s_ease] hover:scale-105 cursor-pointer"
    >
      <div
        style={{ backgroundColor: props.content }}
        className="flex h-full w-[20%]"
      ></div>
      <div className="flex flex-col justify-between">
        <div>{props.content}</div>
        <div>{moment().format("DD.MM.YY hh:mm:ss")}</div>
      </div>
      <div
        style={{ opacity: hovered ? 1 : 0 }}
        className="flex flex-col justify-between mr-1"
      >
        <IoIosMore size={18} />
        <MdDelete size={18} />
      </div>
    </div>
  );
}
