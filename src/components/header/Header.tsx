import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { headerHeight } from "../root/constants";
import { titleHeader } from "./constants";

export function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <header
      className="flex justify-between items-center w-full px-4 shadow-md"
      style={{ height: headerHeight }}
    >
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
      >
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1>{titleHeader}</h1>
      </div>
    </header>
  );
}
