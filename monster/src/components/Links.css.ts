import { style } from "@vanilla-extract/css";

export const links = style({
	fontSize: "2.2em",
	marginBottom: 16,
	letterSpacing: "-0.02em",
});

export const link = style({
	color: "#000",
	textDecoration: "underline",
	textDecorationThickness: "1px",
	textUnderlineOffset: "4px",
	transition: "all 0.2s ease",

	":hover": {
		textDecoration: "none",
		transform: "translateY(-1px)",
	},

	selectors: {
		"[data-theme='dark'] &": {
			color: "#fff",
		},
	},
});
