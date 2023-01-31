import { Setter, createEffect, createSignal, lazy } from 'solid-js';

import type ProjectList from "../../types/project";
import isVisable from "../../lib/transitions";

const Card = lazy(() => import("./card"));
const projects = await import("../../assets/jsons/projects.json");

const Grid = (props: { changeFilter: Setter<ProjectList> }) => {
	let grid: HTMLDivElement;

	const Languages = [
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
		"SolidJS",
		"Tailwindcss",
		"Typescript",
		"Vite",
		"Webpack",
		"Vercel",
		"Astro",
		"Pocketbase"
	];

	const shown = isVisable(() => grid);
	const [selected, changeSelected] = createSignal<string[]>(JSON.parse(localStorage.getItem("selected")!) || Languages);
	
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

	return <div ref={ grid! } class="grid h-fit grid-cols-smallLang lg:grid-cols-lang xl:gap-4 justify-items-center gap-y-2 xl:mt-10 lg:mt-4 lg:w-[90%] w-full mb-10">
		{ (shown() || grid!?.childElementCount > 0) &&
			<> 
				<Card index={ 0 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Javascript" language="javascript" />
				<Card index={ 1 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Typescript" language="typescript" />
				<Card index={ 2 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Python" language="python" />
				<Card index={ 3 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Java" language="java" />
				<Card index={ 4 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Android" language="android" />
				<Card index={ 5 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Csharp" language="csharp" />
				<Card index={ 6 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Css" language="css" />
				<Card index={ 7 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Html" language="html" />
				<Card index={ 8 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="React" language="react" />
				<Card index={ 9 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="NodeJS" language="nodejs" />
				<Card index={ 10 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="SolidJS" language="solidjs" />
				<Card index={ 11 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Astro" language="astro" />
				<Card index={ 12 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="NextJS" language="nextjs" />
				<Card index={ 13 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Vercel" language="vercel" />
				<Card index={ 14 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Express" language="express" />
				<Card index={ 15 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Tailwindcss" language="tailwindcss" />
				<Card index={ 16 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Jest" language="jest" />
				<Card index={ 17 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="ChartJS" language="chartjs" />
				<Card index={ 18 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="GraphQL" language="graphql" />
				<Card index={ 19 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Electron" language="electron" />
				<Card index={ 20 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Pocketbase" language="pocketbase" />
				<Card index={ 21 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Firebase" language="firebase" />
				<Card index={ 22 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Webpack" language="webpack" />
				<Card index={ 23 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Vite" language="vite" />
				<Card index={ 24 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Expo" language="expo" />
				<Card index={ 25 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Git" language="git" />
				<Card index={ 26 } shown={ shown } selected={ selected } changeSelected={ changeSelected } languages={ Languages } name="Linux" language="linux" />
			</>
		}
	</div>
};

export default Grid;