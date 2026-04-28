import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
} & Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "type"
>;