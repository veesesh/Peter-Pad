
interface ButtonInterface {
    title?: string;
    size: "lg" | "sm" | "md";
    startIcon?: any;
    endIcon?: any;
    variant: "primary" | "secondary";
    onClick: () => void;
}
const variantStyles = {
    "primary": "bg-purple-300 text-white",
    "secondary": "bg-purple-600 text-white" 
}
const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyles = "rounded-md flex"

export const Button = (props: ButtonInterface) => {
   
    return <button className= {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} >{props.startIcon} {props.title} {props.endIcon}</button>


};

