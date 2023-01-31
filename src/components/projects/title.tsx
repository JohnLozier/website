import type { Accessor } from "solid-js";
import { For } from "solid-js";
import type ProjectList from "../../types/project";

const Item = (props: { currentIndex: Accessor<number>, items: Accessor<ProjectList> }) => {
	return <div class="h-10 mb-3 flex items-center justify-center">
		<For each={ props.items().default }>
			{ (node, index) =>
				<h1 class={ `text-text/70 ${ props.currentIndex() == index() ? "opacity-100 delay-250 blur-none" : "select-none blur-sm opacity-0" } w-full text-center absolute transition-[opacity,filter] duration-300 tracking-wide text-4xl line uppercase mx-6 font-montserrat font-bold` }>{
					node.title
				}</h1>
			}
		</For>
	</div>
};

export default Item;