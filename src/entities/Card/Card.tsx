import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import { TypeContextMenu } from "@types";
import { getContentType } from "@utils";

type TypeCard = {
  content: string;
};

export default function Card(props: {
  card: TypeCard;
  contextMenu: TypeContextMenu;
  setContextMenu: Dispatch<SetStateAction<TypeContextMenu>>;
}) {
  return (
    <div
      onContextMenu={(e) =>
        props.setContextMenu({
          type: getContentType(props.card.content),
          x: e.clientX,
          y: e.clientY,
        })
      }
      className="w-[90%] min-h-16 p-1 bg-dark my-2 rounded flex flex-row justify-between [transition:background-color_0.5s_ease,transform_0.1s_ease] hover:scale-105 cursor-pointer"
    >
      <div
        style={{ backgroundColor: props.card.content }}
        className="flex h-full w-[20%]"
      ></div>
      <div className="flex flex-col justify-between">
        <div>{props.card.content}</div>
        <div>{moment().format("DD.MM.YY hh:mm:ss")}</div>
      </div>
    </div>
  );
}
