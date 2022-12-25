const Posts = lazy(() => import("./posts"));

import { createEffect, lazy } from "solid-js";

import isVisable from "../../lib/transitions";

const Blog = () => {
	
	let title: HTMLHeadingElement;

	const shown = isVisable(() => title);

	createEffect(() =>
		shown() ? title.classList.remove("-translate-x-full") : null
	);

	return <div class="w-screen min-h-screen mt-20 flex flex-col">
		<h1 ref={ title! } class={ `${ shown() || title!?.classList.contains("animate-sub-title") ? "animate-sub-title" : "" } opacity-0 mb-20 relative text-text select-none transition-transform duration-1000 uppercase font-montserrat text-5xl font-bold tracking-tight ml-16` }>What Im working on</h1>
		<Posts />
	</div>
};

export default Blog;