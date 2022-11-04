import SolidJS from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [
		SolidJS(),
		tailwind()
	]
});