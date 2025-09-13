import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
	margin: 0,
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
	backgroundColor: "white",
	color: "black",
	transition: "background-color 0.3s ease, color 0.3s ease",
});

globalStyle("[data-theme='dark'] body", {
	backgroundColor: "black",
	color: "white",
});

globalStyle("*", {
	boxSizing: "border-box",
});
