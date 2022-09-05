import SolidPlugin from "vite-plugin-solid";
import { defineConfig } from "vite";

const Config = defineConfig({
	plugins: [
		SolidPlugin()
	],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	}
});

export default Config;