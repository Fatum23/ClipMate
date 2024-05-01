import ThemePicker from "./ThemePicker";
import { IoMdSettings } from "react-icons/io";

export default function Header(props: { title: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between pl-1 pr-1 pt-1 overflow-hidden">
        <div data-tauri-drag-region className="break-all w-full">
          {props.title}
        </div>
        <div className="flex items-start pl-2h-full gap-1">
          <ThemePicker />
          <button>
            <IoMdSettings size={24} />
          </button>
        </div>
      </div>
      <div className="bg-dark rounded-3xl h-0.5 mt-1"></div>
    </div>
  );
}
