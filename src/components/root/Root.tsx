import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Content } from "../content/Content";
import { headerHeight, footerHeight } from "./constants";

export interface IWindowSize {
  width: number;
  height: number;
}
export interface IBodyHeight {
  height: number;
}
export function Root() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const bodyHeight = windowSize.height - headerHeight - footerHeight;
  const gridRows = `grid-rows-[${headerHeight}px_${bodyHeight}px_${footerHeight}px]`;
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`grid ${gridRows} w-screen h-screen`}>
      <Header />
      <Content height={bodyHeight}></Content>
      <Footer />
    </div>
  );
}
