import SolidJS from "vite-plugin-solid";
import { defineConfig } from "vite";

const Config = defineConfig({
	plugins: [
		SolidJS()
	],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},
	build: {
		target: "ESNext",
		rollupOptions: {
			input: "index.html",
			output: {
				chunkFileNames: "src/chunk-[hash].js",
				entryFileNames: "src/js/[name].js",
				assetFileNames: (asset) =>
					asset.name?.endsWith(".css") ? "src/css/[name].[ext]" :
					asset.name?.endsWith(".ttf") ? "assets/fonts/[name].[ext]" :
					"assets/[name].[ext]",
			},
			
		}
	}
});

export default Config;