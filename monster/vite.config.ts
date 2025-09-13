import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { copyFileSync } from "fs";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		react(),
		vanillaExtractPlugin(),
		{
			name: "copy-404",
			writeBundle() {
				copyFileSync(
					resolve(__dirname, "dist/index.html"),
					resolve(__dirname, "dist/404.html"),
				);
			},
		},
	],
	base: "/",
	build: {
		outDir: "dist",
		copyPublicDir: true,
	},
});