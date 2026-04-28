import type { ButtonProps } from "@/types/btnProps";
import styles from "./styles.module.scss";

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