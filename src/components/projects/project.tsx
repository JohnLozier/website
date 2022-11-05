import type { Accessor, Setter } from "solid-js";
import { For, createEffect } from 'solid-js';

import Dots from "./dots";
import type ProjectList from "../../types/project";

const Project = (props: { changeSelected: Setter<number>, setLastChanged: Setter<number>, selected: Accessor<number>, projectList: Accessor<ProjectList> }) => {
	
	createEffect(() =>
		props.projectList().default.length < props.selected() + 1 ? props.changeSelected(Math.max(0, props.projectList().default.length - 1)) : null
	);

	return <div class="bg-dark w-[34rem] h-135 overflow-hidden flex flex-col">
		<div class="flex transition-left relative transition-[left] duration-1000" style={ {
			width: `${ props.projectList().default.length * 100 }%`,
			left: `-${ props.selected() * 100 }%`
		} } >
			<For each={ props.projectList().default }>
			{ node =>
				<div class="mt-6 w-full mx-2">
					<a draggable={ false } href={ node.url } class="text-4xl hover:text-[2.35rem] select-none uppercase font-bold text-subtitle font-montserrat pointer cursor-none transition-[font] duration-500">{
						node.title
					}</a>
					<img draggable={ false } src={ `/${ node.img }` } class="my-4 w-full"/>
					<p class="text-text text-xl font-openSans font-bold description"> {
						node.description.split(/(\[.*?\]\(.*?\))/g).map(node => {
							const [matched, name, url] = node.match(/^\[(.*?)\]\((.*?)\)$/) || [];
							
							return matched == node ? <a class="cursor-none pointer text-sky-400 hover:text-sky-600 transition-colors duration-500" href={ url }>{ name }</a> : node
						})
					}</p>
				</div>
			}
		</For>
		</div>
		<Dots changeSelected={ props.changeSelected } setLastChanged={ props.setLastChanged } selected={ props.selected } amount={ props.projectList().default.length } />
	</div>
};




export default Project;