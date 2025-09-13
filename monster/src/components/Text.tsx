import type { ReactNode } from "react";
import { consulting, form } from "./Text.css";

interface TextProps {
	children: ReactNode;
}

export const Consulting = ({ children }: TextProps) => {
	return <div className={consulting}>{children}</div>;
};

export const Form = ({ children }: TextProps) => {
	return <div className={form}>{children}</div>;
};
