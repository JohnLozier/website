import SolidJS from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

const Config = defineConfig({
	integrations: [
		SolidJS(),
		tailwind(),
		prefetch()
	]
});

export default Config;