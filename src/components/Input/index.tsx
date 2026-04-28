import type { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = {
    label: string;
    id: string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, id, className, type = "text", ...props }: InputProps) {
    const merged = [styles.root, className].filter(Boolean).join(" ");

    return (
        <label className={merged} htmlFor={id}>
            <span>{label}</span>
            <input id={id} type={type} {...props} />
        </label>
    );
}
