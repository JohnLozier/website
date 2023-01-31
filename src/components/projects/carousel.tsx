import { createSignal, lazy } from "solid-js";

import type { Accessor } from "solid-js";
import type ProjectList from "../../types/project";
import { createEffect } from "solid-js";
import { interval } from "../../lib/utils";
import isVisable from "../../lib/transitions";

const Description = lazy(() => import("./description"));
const Image = lazy(() => import("./image"));
const Title = lazy(() => import("./title"));
const Dots = lazy(() => import("./dots"));

const Project = (props: { projectList: Accessor<ProjectList> }) => {

	let project: HTMLDivElement;

	const shown = isVisable(() => project);
	const [selected, changeSelected] = createSignal(0);
	const [lastChange, setLastChanged] = createSignal<number>(0);
	let forward = true; // save direction of loop

	interval(() => changeSelected(current => {
		if (((new Date).getTime() - lastChange()) / 1000 <= 20) {
			return current;
		};

		(current == 0 && forward == false) || (current == props.projectList().default.length - 1 && forward == true) ?
			forward = !forward : null;
		
		return props.projectList().default.length <= 1 ? current : forward ? current + 1 : current - 1;
	}), "10s");
	
	createEffect(() =>
		props.projectList().default.length < selected() + 1 ? changeSelected(Math.max(0, props.projectList().default.length - 1)) : null
	);

	document.onkeydown = ({ key }) =>
		lastChange() + 500 > Date.now() ? null :
			key == "ArrowRight" && selected() != props.projectList().default.length - 1 ? changeSelected(current => current + 1) && setLastChanged(Date.now()) :
			key == "ArrowLeft" && selected() > 0 ? changeSelected(current => current - 1) && setLastChanged(Date.now()) : null;

	return <div ref={ project! } class={ `${ shown() || project!.classList.contains("animate-opacity") ? "animate-opacity" : "" } flex sm:flex-col flex-col-reverse items-center justify-center` }>
		<div class="flex flex-col items-center">
			<Title currentIndex={ selected } items={ props.projectList }/>
			<Image currentIndex={ selected } setIndex={ changeSelected } setLastChanged={ setLastChanged } items={ props.projectList }/>
			<Description currentIndex={ selected } items={ props.projectList } />
		</div>
		<Dots changeSelected={ changeSelected } setLastChanged={ setLastChanged } lastChanged={ lastChange } selected={ selected } amount={ props.projectList().default.length } />
	</div>
};




export default Project;