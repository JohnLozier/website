import { Setter, createEffect, createSignal } from 'solid-js';

import Card from "./card";
import type ProjectList from "../../types/project";
import isVisable from "../../lib/transitions";

const projects = await import("../../jsons/projects.json");

const Android = await import("../../svgs/languages/android.svg");
const ChartJS = await import("../../svgs/languages/chartjs.svg");
const Expo = await import("../../svgs/languages/expo.svg");
const Csharp = await import("../../svgs/languages/csharp.svg");
const Css = await import("../../svgs/languages/css.svg");
const Electron = await import("../../svgs/languages/electron.svg");
const Express = await import("../../svgs/languages/express.svg");
const Firebase = await import("../../svgs/languages/firebase.svg");
const Git = await import("../../svgs/languages/git.svg");
const GraphQL = await import("../../svgs/languages/graphql.svg");
const Html = await import("../../svgs/languages/html.svg");
const Java = await import("../../svgs/languages/java.svg");
const Javascript = await import("../../svgs/languages/javascript.svg");
const Jest = await import("../../svgs/languages/jest.svg");
const Linux = await import("../../svgs/languages/linux.svg");
const NextJS = await import("../../svgs/languages/nextjs.svg");
const NodeJS = await import("../../svgs/languages/nodejs.svg");
const Python = await import("../../svgs/languages/python.svg");
const React = await import("../../svgs/languages/react.svg");
const SolidJS = await import("../../svgs/languages/solidjs.svg");
const Tailwindcss = await import("../../svgs/languages/tailwindcss.svg");
const Typescript = await import("../../svgs/languages/typescript.svg");
const Vite = await import("../../svgs/languages/vite.svg");
const Webpack = await import("../../svgs/languages/webpack.svg");

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