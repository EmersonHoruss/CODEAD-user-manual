import { useState, useEffect } from "react";
import { EAxisReziseHandler } from "./EAxisResizeHandler";
import { TUseResizeHandler } from "./TUseResizeHandler";

const getNewSize = (
  axis: EAxisReziseHandler,
  size: number,
  e: MouseEvent
): number => {
  if (axis === EAxisReziseHandler.y) {
    return size + e.movementX;
  }
  if (axis === EAxisReziseHandler.x) {
    return size - e.movementY;
  }
  return size;
};
const useResizeHandler: TUseResizeHandler = (
  axis: EAxisReziseHandler,
  defaultSize: number,
  minSize: number,
  maxSize: number,
  classNameDefault: string,
  classNameActive: string
) => {
  const [size, setSize] = useState(defaultSize);
  const [className, setClassName] = useState(classNameDefault);
  const [isResizing, setIsResizing] = useState(false);
  // manage size
  useEffect(() => {
    const resizeHandler = (e: MouseEvent) => {
      if (isResizing) {
        setSize((size: number) => {
          const newSize = getNewSize(axis, size, e);
          if (newSize <= maxSize && newSize >= minSize) {
            return newSize;
          }
          return size;
        });
      }
    };
    window.addEventListener("mousemove", resizeHandler);
    return () => {
      window.removeEventListener("mousemove", resizeHandler);
    };
  }, [isResizing]);
  // manage className
  useEffect(() => {
    let newClassName = classNameDefault;
    if (isResizing) {
      newClassName = classNameActive;
    }
    setClassName(newClassName);
  }, [isResizing]);
  useEffect(() => {
    const mouseUpHandler = () => {
      setIsResizing(false);
    };
    window.addEventListener("mouseup", mouseUpHandler);
    return () => {
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);
  const handleStop = () => {
    setIsResizing(true);
  };
  return {
    size,
    className,
    onStop: handleStop,
  };
};
export default useResizeHandler;
