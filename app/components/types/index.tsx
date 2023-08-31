import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit";
}
export interface SearchManufacturerProps {
    menufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}