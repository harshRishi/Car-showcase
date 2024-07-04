import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType: "button" | "submit";
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void; // returns nothing
}
