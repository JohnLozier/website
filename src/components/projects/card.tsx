import { Accessor, Setter, createEffect } from 'solid-js';

import { sameLine } from "../../lib/utils";

const Card = (props: { shown: Accessor<Boolean>, selected: Accessor<string[]>, changeSelected: Setter<string[]>, languages: string[],  name: string, language: string, index: number }) => {
	let card: HTMLDivElement;

	createEffect(() =>
		props.shown() ? card.classList.remove("ml-screen") : null
	);

	createEffect(() =>
		props.selected().includes(props.name) ? sameLine(() => card.classList.add("bg-white"), () => card.classList.remove("bg-[#323434]")) : sameLine(() => card.classList.add("bg-[#323434]"), () => card.classList.remove("bg-white"))
	);

	return <div ref={ card! } onClick={ () =>
		props.changeSelected(current =>
			current.length == 1 && current[0] == props.name ? props.languages : [props.name]
		)
	} class="ml-screen animate-card duration-300 relative xl:w-24 lg:w-20 lg:h-20 -mx-4 opacity-0 xl:h-24 w-16 h-16 rounded-[1.4rem] pointer hover:-translate-y-2 xl:hover:-translate-y-3 flex items-center justify-center shadow-[inset_0_2px_10px_2px_#0000000d,_0_4px_4px_0px_#00000040]" style={ {
		"animation-delay": `${ props.index * 100 }ms`
	} }>
		<img draggable={ false } src={ `/svgs/languages/${ props.language }.svg` } class={ `${ props.selected().includes(props.name) ? "" : "grayscale "}m-3 transition-filter select-none duration-500` } />
	</div>
};

export default Card;