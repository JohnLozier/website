import SolidJS from "vite-plugin-solid";
import SolidSVG from "vite-plugin-solid-svg";
import { defineConfig } from "vitest/config";

const Config = defineConfig({
	plugins: [
		SolidJS(),
		SolidSVG()
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
	},
	test: {
		deps: {
			registerNodeLoader: true,
			inline: [/solid-js/],
		},
		environment: "jsdom",
		globals: true,
		setupFiles: [ "node_modules/@testing-library/jest-dom/extend-expect" ],
		transformMode: { web: [/\.[jt]sx?$/] },
	},
	resolve: {
		conditions: ["development", "browser"],
	},
	define: {
		VITE_VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID
	}
});

export default Config;