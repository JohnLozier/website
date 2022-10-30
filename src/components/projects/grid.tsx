import { Setter, createEffect, createSignal } from 'solid-js';

import Card from "./card";
import type ProjectList from "../../types/project";
import isVisable from "../../lib/transitions";

const projects = await import("../../../assets/jsons/projects.json");

const Android = await import("../../../assets/svgs/languages/android.svg");
const ChartJS = await import("../../../assets/svgs/languages/chartjs.svg");
const Expo = await import("../../../assets/svgs/languages/expo.svg");
const Csharp = await import("../../../assets/svgs/languages/csharp.svg");
const Css = await import("../../../assets/svgs/languages/css.svg");
const Electron = await import("../../../assets/svgs/languages/electron.svg");
const Express = await import("../../../assets/svgs/languages/express.svg");
const Firebase = await import("../../../assets/svgs/languages/firebase.svg");
const Git = await import("../../../assets/svgs/languages/git.svg");
const GraphQL = await import("../../../assets/svgs/languages/graphql.svg");
const Html = await import("../../../assets/svgs/languages/html.svg");
const Java = await import("../../../assets/svgs/languages/java.svg");
const Javascript = await import("../../../assets/svgs/languages/javascript.svg");
const Jest = await import("../../../assets/svgs/languages/jest.svg");
const Linux = await import("../../../assets/svgs/languages/linux.svg");
const NextJS = await import("../../../assets/svgs/languages/nextjs.svg");
const NodeJS = await import("../../../assets/svgs/languages/nodejs.svg");
const Python = await import("../../../assets/svgs/languages/python.svg");
const React = await import("../../../assets/svgs/languages/react.svg");
const SolidJS = await import("../../../assets/svgs/languages/solidjs.svg");
const Tailwindcss = await import("../../../assets/svgs/languages/tailwindcss.svg");
const Typescript = await import("../../../assets/svgs/languages/typescript.svg");
const Vite = await import("../../../assets/svgs/languages/vite.svg");
const Webpack = await import("../../../assets/svgs/languages/webpack.svg");


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
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Javascript" language={ Javascript } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Typescript" language={ Typescript } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Python" language={ Python } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Java" language={ Java } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Android" language={ Android } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Csharp" language={ Csharp } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Css" language={ Css } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Html" language={ Html } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="React" language={ React } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="NodeJS" language={ NodeJS } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="SolidJS" language={ SolidJS } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="NextJS" language={ NextJS } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Express" language={ Express } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Tailwindcss" language={ Tailwindcss } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Jest" language={ Jest } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="ChartJS" language={ ChartJS } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="GraphQL" language={ GraphQL } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Electron" language={ Electron } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Firebase" language={ Firebase } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Webpack" language={ Webpack } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Vite" language={ Vite } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Expo" language={ Expo } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Git" language={ Git } />
		<Card shown={ shown } selected={ selected } changeSelected={ changeSelected } name="Linux" language={ Linux } />
	</div>
};

export default Grid;