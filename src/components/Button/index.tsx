import type { ButtonProps } from "@/types/btnProps";
import "./styles.scss";



export default function Button({
    children,
    className,
    variant = "primary",
    type = "button",
    onClick,
}: ButtonProps) {
    const buttonClass = `button button--${variant}${className ? ` ${className}` : ""}`;

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}