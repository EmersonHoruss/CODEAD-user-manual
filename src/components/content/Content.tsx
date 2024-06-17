import { useEffect, useRef, useState } from "react";
import { SideNav } from "../sidenav/SideNav";
import { Outlet } from "react-router-dom";
import { IBodyHeight } from "../root/Root";
import { idSideNavWrapper } from "../sidenav/constants";

export function Content({ height }: IBodyHeight) {
  const miDivRef = useRef<HTMLDivElement>(null);
  const [outletWidth, setOutletWidth] = useState(0);
  // listen sidenav's width changes to change outlet's width
  useEffect(() => {
    if (miDivRef.current) {
      const contentWidth: number = miDivRef.current.offsetWidth;
      const sidenavChild = miDivRef.current.querySelector(
        `#${idSideNavWrapper}`
      ) as HTMLElement | null;
      if (sidenavChild) {
        const resizeObserver = new ResizeObserver((entries) => {
          const [entry] = entries;
          const sidenavWidth = entry.contentRect.width;
          const outletWidth = contentWidth - sidenavWidth;
          setOutletWidth(outletWidth);
        });
        resizeObserver.observe(sidenavChild);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }
  }, []);
  // listen window's size changes to change outlet's width
  useEffect(() => {
    const handleResize = () => {
      if (miDivRef.current) {
        const contentWidth: number = miDivRef.current.offsetWidth;
        const sidenavChild = miDivRef.current.querySelector(
          `#${idSideNavWrapper}`
        ) as HTMLElement | null;
        if (sidenavChild) {
          const sidenavWidth: number = sidenavChild.offsetWidth;
          const outletWidth = contentWidth - sidenavWidth;
          setOutletWidth(outletWidth);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{ height }}
      className="w-screen grid grid-cols-[max-content_auto] overflow-hidden"
      ref={miDivRef}
    >
      <SideNav height={height} />
      <div style={{ height, maxHeight: height }} className="flex flex-col">
        <div className={`grow h-full w-full`} style={{ width: outletWidth }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
