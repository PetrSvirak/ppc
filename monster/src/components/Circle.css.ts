import { style } from "@vanilla-extract/css";

export const circle = style({
	width: 320,
	height: 320,
	border: "2px solid #000",
	borderRadius: "50%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
	background: "#fff",
	transition:
		"box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
	position: "relative",

	":hover": {
		boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
	},

	selectors: {
		"[data-theme='dark'] &": {
			background: "#333",
			border: "2px solid #666",
			boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)",
		},
		"[data-theme='dark'] &:hover": {
			boxShadow: "0 12px 48px rgba(255, 255, 255, 0.15)",
		},
	},
});

export const themeToggle = style({
	position: "absolute",
	bottom: 15,
	cursor: "pointer",
	transition: "transform 0.2s ease, opacity 0.2s ease",
	userSelect: "none",
	opacity: 0.6,
	display: "flex",
	alignItems: "center",
	gap: 2,
	background: "none",
	border: "none",
	padding: 0,
	color: "inherit",

	":hover": {
		transform: "scale(1.05)",
		opacity: 1,
	},

	":active": {
		transform: "scale(0.98)",
	},
});
