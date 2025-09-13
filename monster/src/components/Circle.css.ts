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
	transition: "box-shadow 0.3s ease",

	":hover": {
		boxShadow: "0 12px 48px rgba(0, 0, 0, 0.15)",
	},
});
