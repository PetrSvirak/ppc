import { style } from "@vanilla-extract/css";

export const taxId = style({
	fontSize: "0.75em",
	color: "#888",
	fontWeight: 300,
	letterSpacing: "0.1em",
	marginTop: 16,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 4,
	transition: "color 0.3s ease",

	selectors: {
		"[data-theme='dark'] &": {
			color: "#aaa",
		},
	},
});

export const taxIdLink = style({
	display: "inline-flex",
	alignItems: "center",
	opacity: 0.7,
	transition: "opacity 0.2s ease, transform 0.2s ease",

	":hover": {
		opacity: 1,
		transform: "scale(1.05)",
	},
});

export const taxIdIconWrapper = style({
	display: "inline-block",
	overflow: "hidden",
	position: "relative",
	maxHeight: "1.2em",
	maxWidth: "1.2em",
	transition: "overflow 0.2s ease",

	selectors: {
		[`${taxIdLink}:hover &`]: {
			overflow: "visible",
			zIndex: 10,
		},
	},
});

export const taxIdIcon = style({
	height: "1.2em",
	width: "auto",
	transition: "transform 0.2s ease",
	position: "relative",

	":hover": {
		transform: "scale(1.5)",
		zIndex: 20,
	},
});
