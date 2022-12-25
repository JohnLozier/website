const Carousel = lazy(() => import("./carousel"));
const Grid = lazy(() => import("./grid"));

const projectList = await import("../../assets/jsons/projects.json");

import { createSignal, lazy } from "solid-js";

import isVisable from "../../lib/transitions";

const Projects = () => {

	let title: HTMLHeadingElement;
	const [filtered, changeFiltered] = createSignal(projectList);
	const shown = isVisable(() => title);
	
	return <div class="w-screen min-h-screen mt-20 flex flex-col">
		<h1 ref={ title! } class={ `${ shown() || title!?.classList.contains("animate-sub-title") ? "animate-sub-title" : "" } opacity-0 relative text-text select-none transition-transform duration-1000 uppercase font-montserrat text-5xl font-bold tracking-tight ml-16` }>Here is some of my work</h1>
		<div class="flex flex-col xl:flex-row w-screen grow justify-center mt-16 gap-5">
			<div class="flex justify-center grow xl:w-[max(50vw,35rem)] w-full">
				<Carousel projectList={ filtered }/>
			</div>
			<div class="flex justify-center grow xl:w-[50vw] w-full">
				<Grid changeFilter={ changeFiltered } />
			</div>
		</div>
	</div>
};

export default Projects;