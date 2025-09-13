import { useEffect, useState } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
	AUTO = "auto",
}

const darkThemeSelector = "(prefers-color-scheme: dark)";
const eventListenerName = "change";
const localStoreKey = "theme";
const htmlThemeDataAttribute = "data-theme";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(() => {
		const saved = localStorage.getItem(localStoreKey);
		return (saved as Theme) || Theme.AUTO;
	});

	const [isDark, setIsDark] = useState(() => {
		if (theme === Theme.AUTO) {
			return window.matchMedia(darkThemeSelector).matches;
		}
		return theme === Theme.DARK;
	});

	useEffect(() => {
		localStorage.setItem(localStoreKey, theme);

		if (theme === Theme.AUTO) {
			const mediaQuery = window.matchMedia(darkThemeSelector);
			const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

			setIsDark(mediaQuery.matches);
			mediaQuery.addEventListener(eventListenerName, handleChange);

			return () =>
				mediaQuery.removeEventListener(eventListenerName, handleChange);
		} else {
			setIsDark(theme === Theme.DARK);
		}
	}, [theme]);

	useEffect(() => {
		document.documentElement.setAttribute(
			htmlThemeDataAttribute,
			isDark ? Theme.DARK : Theme.LIGHT,
		);
	}, [isDark]);

	const toggleTheme = () => {
		setTheme((prev) => {
			if (prev === Theme.AUTO) return Theme.LIGHT;
			if (prev === Theme.LIGHT) return Theme.DARK;
			return Theme.AUTO;
		});
	};

	return { theme, isDark, toggleTheme };
};
