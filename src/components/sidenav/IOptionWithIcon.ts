import { IOption } from "./IOption";
import { JSXElementConstructor, ReactElement } from "react";

export interface IOptionWithIcon extends IOption {
  icon: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}
