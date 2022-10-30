import { Accessor, Setter, createEffect } from 'solid-js';

import { onMount } from "solid-js";
import { sameLine } from "../../lib/utils";

const Card = (props: { shown: Accessor<boolean>, selected: Accessor<string[]>, changeSelected: Setter<string[]>, name: string, language: typeof import(".svg") }) => {
	let card: HTMLDivElement;

	onMount(() =>
		card.style.transition = `margin-left 1s ease-in-out ${ Array.from(card.parentElement!.children).indexOf(card) * 150 }ms, transform 0.5s ease-in-out, background-color 0.5s linear`
	);

	createEffect(() =>
		props.shown() ? card.classList.remove("ml-screen") : null
	);

	createEffect(() =>
		props.selected().includes(props.name) ? sameLine(() => card.classList.add("bg-white"), () => card.classList.remove("bg-white/10")) : sameLine(() => card.classList.add("bg-white/10"), () => card.classList.remove("bg-white"))
	);

	return <div ref={ card! } onClick={ () =>
		props.changeSelected(current =>
			current.includes(props.name) ? current.filter(item => item != props.name) : [...current, props.name]
		)
	} class="ml-screen w-24 h-24 rounded-[1.4rem] pointer hover:-translate-y-3 flex items-center justify-center shadow-[inset_0_2px_10px_2px_#0000000d,_0_4px_4px_0px_#00000040]">
		<img draggable={ false } src={ props.language.default } class={ `${ props.selected().includes(props.name) ? "" : "grayscale "}m-3 transition-filter select-none duration-500` } />
	</div>
};

export default Card;