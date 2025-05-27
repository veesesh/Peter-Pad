import type { ReactElement } from "react";

interface ButtonInterface {
    title: string | ReactElement;
    size: "lg" | "sm" | "md";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
    onClick?: () => void;
    fullWidth?: boolean;
}
const variantStyles = {
    "primary": "bg-purple-300 text-black",
    "secondary": "bg-purple-600 text-white" 
}
const sizeStyles = {
    "sm": "py-1 px-2 rounded-sm",
    "md": "py-2 px-4 rounded-md",
    "lg": "py-4 px-6 rounded-xl"
}

const defaultStyles = "rounded-md flex items-center"

export const Button = (props: ButtonInterface) => {
   
    return <button onClick= {props.onClick} className = {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? " w-full flex justify-center items-center" : ""} cursor-pointer`}> 

    {props.startIcon? <div className="pr-2 pl-2">{props.startIcon}</div>: null}
    <div className="pl-2 pr-2">
                {props.title}
            </div>
    {props.endIcon}
    
    </button>


};

