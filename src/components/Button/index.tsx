import type { ButtonProps } from "@/types/btnProps";
import "./styles.scss";



export default function Button({ children, className, variant = "primary" }: ButtonProps) {
    const buttonClass = `button button--${variant}${className ? ` ${className}` : ""}`;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
}