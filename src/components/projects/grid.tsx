const Card = lazy(() => import("./card"));

const projects = await import("../../assets/jsons/projects.json");

import { Setter, createEffect, createSignal, lazy } from 'solid-js';

import type ProjectList from "../../types/project";
import isVisable from "../../lib/transitions";

const Grid = (props: { changeFilter: Setter<ProjectList> }) => {
	let grid: HTMLDivElement;

	const shown = isVisable(() => grid);
	const [selected, changeSelected] = createSignal<string[]>(JSON.parse(localStorage.getItem("selected")!) || [
		"Android",
		"ChartJS",
		"Expo",
		"React",
		"Csharp",
		"Css",
		"Electron",
		"Express",
		"Firebase",
		"Git",
		"GraphQL",
		"Html",
		"Java",
		"Javascript",
		"Jest",
		"Linux",
		"NextJS",
		"NodeJS",
		"Python",
		"React",
		"SolidJS",
		"Tailwindcss",
		"Typescript",
		"Vite",
		"Webpack"
	]);
	
	createEffect(() => {
		localStorage.setItem("selected", JSON.stringify(selected()));
		
		props.changeFilter({
			default: projects.default.filter(project =>
				project.tags.some(node =>
					selected().includes(node)
				)
			)
		});
	});

	return <div ref={ grid! } class="grid h-fit grid-cols-lang gap-4 w-[90%] my-10">
		{ (shown() || grid!?.childElementCount > 0) &&
			<> 
				<Card index={ 0 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Javascript" language="javascript" />
				<Card index={ 1 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Typescript" language="typescript" />
				<Card index={ 2 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Python" language="python" />
				<Card index={ 3 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Java" language="java" />
				<Card index={ 4 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Android" language="android" />
				<Card index={ 5 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Csharp" language="csharp" />
				<Card index={ 6 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Css" language="css" />
				<Card index={ 7 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Html" language="html" />
				<Card index={ 8 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="React" language="react" />
				<Card index={ 9 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="NodeJS" language="nodejs" />
				<Card index={ 10 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="SolidJS" language="solidjs" />
				<Card index={ 11 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="NextJS" language="nextjs" />
				<Card index={ 12 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Express" language="express" />
				<Card index={ 13 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Tailwindcss" language="tailwindcss" />
				<Card index={ 14 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Jest" language="jest" />
				<Card index={ 15 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="ChartJS" language="chartjs" />
				<Card index={ 16 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="GraphQL" language="graphql" />
				<Card index={ 17 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Electron" language="electron" />
				<Card index={ 18 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Firebase" language="firebase" />
				<Card index={ 19 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Webpack" language="webpack" />
				<Card index={ 20 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Vite" language="vite" />
				<Card index={ 21 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Expo" language="expo" />
				<Card index={ 22 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Git" language="git" />
				<Card index={ 23 } shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Linux" language="linux" />
			</>
		}
	</div>
};

export default Grid;