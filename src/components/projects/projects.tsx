import { createSignal, onMount } from "solid-js";

import Carousel from "./carousel";
import Grid from "./grid";

const projectList = await import("../../jsons/projects.json");

const Projects = () => {

	let title: HTMLHeadingElement;

	const [filtered, changeFiltered] = createSignal(projectList);

	onMount(() => // will run when component is in view due to astro islands ✨
		title.classList.remove("-translate-x-full")
	);
	
	return <>
		<h1 ref={ title! } class="-translate-x-full text-text select-none transition-transform duration-1000 uppercase font-montserrat text-5xl font-bold tracking-tight ml-16">Here is some of my work</h1>
		<div class="flex flex-col xl:flex-row w-screen grow justify-center mt-16 gap-5">
			<div class="flex justify-center grow xl:w-[max(50vw,35rem)] w-full">
				<Carousel projectList={ filtered }/>
			</div>
			<div class="flex justify-center grow xl:w-[50vw] w-full">
				<Grid changeFilter={ changeFiltered } />
			</div>
		</div>
	</>
};

export default Projects;