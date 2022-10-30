import { Accessor, Setter } from "solid-js";

import { For } from "solid-js";

const Dots = (props: { changeSelected: Setter<number>, setLastChanged: Setter<number>, selected: Accessor<number>, amount: number }) => {
	return <div class="flex items-center h-fit mb-3 mt-auto grid-rows-2 self-center">
		<For each={ Array(props.amount).fill(null) }>
			{ (node, index) =>
				<div class="px-1 py-3 pointer" onClick={ ({ target }) => {
					props.changeSelected([...target.parentElement!.children].indexOf(target));
					props.setLastChanged(Date.now());
				} }>	
					<div class={ `${ props.selected() == index() ? "bg-white scale-[1.4]" : "bg-zinc-500" } pointer-events-none w-[0.45rem] h-[0.45rem] rounded-full bg-clip-padding transition-[colors, transform] duration-1000` }/>
				</div>
			}
		</For>
	</div>
};

export default Dots;