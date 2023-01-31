import type { Accessor } from "solid-js";
import { For } from "solid-js";
import type ProjectList from "../../types/project";

const Item = (props: { currentIndex: Accessor<number>, items: Accessor<ProjectList> }) => {
	return <div class="h-40 max-w-[34rem] mt-3">
		<For each={ props.items().default }>
			{ (node, index) =>
				<p class={ `text-text/70 ${ props.currentIndex() == index() ? "opacity-100 delay-300" : "opacity-0 select-none" } [&>a]:pointer-events-none h-0 transition-[opacity,font] leading-5 sm:leading-normal duration-300 sm:tracking-wide text-base sm:text-lg line uppercase mx-6 font-montserrat font-bold` }>{
					node.description.split(/(\[.*?\]\(.*?\))/g).map(node => {
						const [matched, name, url] = node.match(/^\[(.*?)\]\((.*?)\)$/) || [];
						
						return matched == node ? <a draggable={ false } class="cursor-none pointer text-sky-400 hover:text-sky-600 transition-colors duration-500" href={ url }>{ name }</a> : node
					})
				}</p>
			}
		</For>
	</div>
};

export default Item;