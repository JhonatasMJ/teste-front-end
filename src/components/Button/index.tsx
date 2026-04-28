import styles from "./styles.module.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";

 type ButtonProps = {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
} & Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "type"
>;

export default function Button({
    children,
    className,
    variant = "primary",
    type = "button",
    onClick,
}: ButtonProps) {
    const variantClass = variant === "primary" ? styles.primary : styles.secondary;
    const merged = [styles.root, variantClass, className].filter(Boolean).join(" ");

    return (
        <button type={type} className={merged} onClick={onClick}>
            {children}
        </button>
    );
}