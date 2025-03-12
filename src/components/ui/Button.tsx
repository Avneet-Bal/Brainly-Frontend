import { ReactElement } from "react";

interface ButtonProps {
    varient: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const varientStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-100 text-purple-600"
}

const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}

const defaultStyles = "rounded-md flex items-center"

export const Button = (props: ButtonProps) => {
    return <button className={`${varientStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]}`}><div className="pr-2">{props.startIcon}</div> {props.text} {props.endIcon}</button>
}