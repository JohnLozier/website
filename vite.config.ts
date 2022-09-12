import SolidPlugin from "vite-plugin-solid";
import { defineConfig } from "vite";
import { readdirSync } from "fs";

const Config = defineConfig({
	plugins: [
		SolidPlugin(),
		{
			name: "create-html",
			generateBundle() {
				readdirSync("pages").filter(page =>
					page != "index.tsx"
				).forEach(page =>
					this.emitFile({
						type: "asset",
						fileName: `${ page.match(/^[^.]*/)?.[0] }.html`,
						source: `<!DOCTYPE html>
<html lang="en">
<head>
<script type="module" crossorigin src="/src/js/index.js"></script>
</head>
<body>
	<div id="root"></div>			
</body>
</html>`
					})
				);
			}
		}
	],
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},
	build: {
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