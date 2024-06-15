import { footerHeight } from "../root/constants";

export function Footer() {
  return (
    <div
      className="w-full flex justify-center items-center text-xs shadow-inner"
      style={{ height: footerHeight }}
    >
      <p>© Copyright 2023 CODEAD. All rights reserved.</p>
    </div>
  );
}
