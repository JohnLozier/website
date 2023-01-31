import { Accessor, Setter } from "solid-js";

import { For } from "solid-js";
import { wait } from "../../lib/utils";

const Dots = (props: { changeSelected: Setter<number>, setLastChanged: Setter<number>, lastChanged: Accessor<number> , selected: Accessor<number>, amount: number }) => {
	return <div class="flex items-center h-fit sm:mt-6 self-center">
		<For each={ Array(props.amount).fill(null) }>
			{ (node, index) =>
				<div class="px-1 py-3 pointer" onClick={ ({ target }) => {
					const lastDotPress = Date.now();

					for (let i = 0; i < Math.abs([...target.parentElement!.children].indexOf(target) - props.selected()); i++) {
						wait(() => lastDotPress == props.lastChanged() ? props.changeSelected(current => current + ([...target.parentElement!.children].indexOf(target) > props.selected() ? 1 : -1)) : null , `${ i / 2 }s`)
					};
					
					props.setLastChanged(Date.now());
				} }>	
					<div class={ `${ props.selected() == index() ? "bg-white scale-[1.4]" : "bg-zinc-500" } pointer-events-none w-[0.45rem] h-[0.45rem] rounded-full bg-clip-padding transition-[colors, transform] duration-1000` }/>
				</div>
			}
		</For>
	</div>
};

export default Dots;