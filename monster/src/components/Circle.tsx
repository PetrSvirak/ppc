import { Lightbulb, LightbulbOff, Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { Theme, useTheme } from "../contexts/ThemeContext";
import { circle, themeToggle } from "./Circle.css";

interface CircleProps {
	children: ReactNode;
}

export const Circle = ({ children }: CircleProps) => {
	const { theme, toggleTheme } = useTheme();

	const getThemeIcon = () => {
		switch (theme) {
			case Theme.AUTO:
				return (
					<>
						<Sun size={12} />
						|
						<Moon size={12} />
					</>
				);
			case Theme.LIGHT:
				return <Lightbulb size={16} />;
			case Theme.DARK:
				return <LightbulbOff size={16} />;
			default:
				return <Lightbulb size={16} />;
		}
	};

	const getTooltip = () => {
		switch (theme) {
			case Theme.AUTO:
				return "Auto theme (follows system)";
			case Theme.LIGHT:
				return "Light theme";
			case Theme.DARK:
				return "Dark theme";
			default:
				return "Toggle theme";
		}
	};

	return (
		<div className={circle}>
			{children}
			<button
				className={themeToggle}
				onClick={toggleTheme}
				title={getTooltip()}
				type="button"
				aria-label={getTooltip()}
			>
				{getThemeIcon()}
			</button>
		</div>
	);
};
