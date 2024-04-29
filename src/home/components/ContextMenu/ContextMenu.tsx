import React, { Dispatch, SetStateAction } from "react";
import { TypeContextMenu } from "../../types";
import ContextMenuItem from "./ContextMenuItem";

export default function ContextMenu(props: { contextMenu: TypeContextMenu }) {
  const x =
    props.contextMenu.x + 128 < 350
      ? props.contextMenu.x
      : props.contextMenu.x - 128;
  return (
    <>
      {props.contextMenu.type !== "" && (
        <div
          style={{ left: x, top: props.contextMenu.y }}
          className="absolute w-32 h-auto bg-light flex flex-col gap-1 rounded overflow-hidden"
        >
          {props.contextMenu.type}
          <ContextMenuItem />
          <ContextMenuItem />
        </div>
      )}
    </>
  );
}
