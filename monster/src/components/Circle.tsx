import type { ReactNode } from "react";
import { circle } from "./Circle.css";

interface CircleProps {
	children: ReactNode;
}

export const Circle = ({ children }: CircleProps) => {
	return <div className={circle}>{children}</div>;
};
