const Project = lazy(() => import("./project"));

import { Accessor, lazy } from "solid-js";

import type ProjectList from "../../types/project";
import { createSignal } from 'solid-js';
import { interval } from "../../lib/utils";
import isVisable from "../../lib/transitions";

const Carousel = (props: { projectList: Accessor<ProjectList> }) => {
	
	let project: HTMLDivElement;

	const shown = isVisable(() => project);
	const [selected, changeSelected] = createSignal(0);
	const [lastChange, setLastChange] = createSignal<number>(0);
	let forward = true; // save direction of loop

	interval(() => changeSelected(current => {
		if (((new Date).getTime() - lastChange()) / 1000 <= 20) {
			return current;
		};

		(current == 0 && forward == false) || (current == props.projectList().default.length - 1 && forward == true) ?
			forward = !forward : null;
		
		return forward ? current + 1 : current - 1;
	}), "10s");

	return <div ref={ project! } class={ `${ shown() || project!?.classList.contains("opacity-100") ? "opacity-100 " : "" }bg-dark mx-5 opacity-0 transition-opacity delay-500 duration-1000 px-4 h-fit rounded-2xl shadow-[0_25px_15px_-7px_#0000004d]` }> 
		<Project selected={ selected } setLastChanged={ setLastChange } changeSelected={ changeSelected } projectList={ props.projectList } />
	</div>
};

export default Carousel;