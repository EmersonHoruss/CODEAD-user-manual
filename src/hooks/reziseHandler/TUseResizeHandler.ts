import { EAxisReziseHandler } from "./EAxisResizeHandler";
import { IUseResizeHandler } from "./IUseResizeHandler";

export type TUseResizeHandler = (
  axis: EAxisReziseHandler,
  defaultSize: number,
  minSize: number,
  maxSize: number,
  className: string,
  classNameActive: string
) => IUseResizeHandler;
