import { Setter, createEffect, createSignal } from 'solid-js';

import Card from "./card";
import type ProjectList from "../../types/project";
import isVisable from "../../lib/transitions";

const projects = await import("../../jsons/projects.json");

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
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Javascript" language="javascript" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Typescript" language="typescript" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Python" language="python" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Java" language="java" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Android" language="android" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Csharp" language="csharp" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Css" language="css" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Html" language="html" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="React" language="react" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="NodeJS" language="nodejs" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="SolidJS" language="solidjs" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="NextJS" language="nextjs" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Express" language="express" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Tailwindcss" language="tailwindcss" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Jest" language="jest" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="ChartJS" language="chartjs" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="GraphQL" language="graphql" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Electron" language="electron" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Firebase" language="firebase" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Webpack" language="webpack" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Vite" language="vite" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Expo" language="expo" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Git" language="git" />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Linux" language="linux" />
	</div>
};

export default Grid;