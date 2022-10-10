const isVisable = lazy(() => import("./transitions"));

import { createEffect, lazy } from "solid-js";

import { wait } from "../lib/utils";

const Title = () => {

	let name: HTMLHeadingElement;
	let subTitle: HTMLHeadingElement;
	let welcome: HTMLHeadingElement;

	const nameShown = isVisable(() => name);
	const subtitleShown = isVisable(() => subTitle);
	const welcomeShown = isVisable(() => welcome);

	createEffect(() => {
		nameShown() && name.classList.contains("-ml-screen") ? wait(() => name.classList.add("hover:-translate-y-3"), "1s") : null;
		nameShown() && name.classList.contains("-ml-screen") ? name.classList.remove("-ml-screen") : null;
		subtitleShown() && subTitle.classList.contains("-ml-screen") ? subTitle.classList.remove("-ml-screen") : null;
		welcomeShown() && welcome.classList.contains("blur") ? welcome.classList.replace("blur", "filter-none") : null;
	});

	return <div class="h-screen w-screen flex flex-col justify-center">
		<div class="w-3/5 ml-title max-w-4xl">
			<h3 ref={ welcome! } class="blur select-none transition-filter duration-1000 delay-100 ease-out font-montserrat uppercase w-fit text-3xl font-extrabold text-sky-200 drop-shadow-welcome">Welcome, I'm</h3>
			<h1 ref={ name! } class="w-fit select-none -ml-screen sm:text-7xl md:text-8xl lg:text-12xl pointer uppercase font-montserrat text-transparent font-extrabold text-4xl leading-none bg-gradient-to-br from-cyan-300 to-sky-600 bg-clip-text drop-shadow-title hover:drop-shadow-titleHover transition-all ease-out duration-1000 delay-100 hover:delay-[0ms] hover:duration-500 whitespace-nowrap">John Lozier</h1>	
			<h3 ref={ subTitle! } class="text-2xl -ml-screen font-montserrat uppercase transition-[margin] delay-200 duration-1000 font-extrabold text-subtitle sm:w-full w-6/5">
				A student software developer interested in fullstack applications and machine learning
			</h3>
		</div>
	</div>
}; 

export default Title;