import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IBodyHeight } from "../root/Root";
import { idSideNav, idSideNavWrapper, optionsWithIcons } from "./constants";
import useResizeHandler from "../../hooks/reziseHandler/useResizeHandler";
import { EAxisReziseHandler } from "../../hooks/reziseHandler/EAxisResizeHandler";
import {
  resizeActiveHandlerY,
  resizeHandlerY,
} from "../../styles/resize-handler/resize-handler-contants";

const [minWidth, maxWidth, defaultWidth] = [200, 800, 280];
export function SideNav({ height }: IBodyHeight) {
  const { size, className, onStop } = useResizeHandler(
    EAxisReziseHandler.y,
    defaultWidth,
    minWidth,
    maxWidth,
    resizeHandlerY,
    resizeActiveHandlerY
  );
  const navigate = useNavigate();
  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex" style={{ height }} id={`${idSideNavWrapper}`}>
      <div
        style={{ width: `${size}px` }}
        className="flex flex-col overflow-y-auto scroll-codead"
        id={idSideNav}
      >
        {Object.keys(optionsWithIcons).map((key) => {
          const option = optionsWithIcons[key];
          return (
            <Button key={key} onClick={() => handleClick(option.path)}>
              <div className="w-full flex items-center gap-1 normal-case text-base pl-2">
                {option.icon}
                <span>{option.title}</span>
              </div>
            </Button>
          );
        })}
      </div>
      <div className={className} onMouseDown={onStop} />
    </div>
  );
}
