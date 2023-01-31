import type { Accessor, Setter } from "solid-js";

import { For } from "solid-js";
import type ProjectList from "../../types/project";

const Image = (props: { currentIndex: Accessor<number>, setLastChanged: Setter<number>, setIndex: Setter<number>, items: Accessor<ProjectList> }) => {	
	return <div class="flex h-40 sm:h-56 md:h-72 w-full transition-[height] items-center justify-center">
		<For each={ props.items().default }>
			{ ({ url, img }, index) =>
				<div class={ `${
					index() == props.currentIndex() ? "z-[2]" : // current
					index() == props.currentIndex() + 1 ? "scale-[0.8] sm:translate-x-40 translate-x-20 z-[1]" : // next
					index() == props.currentIndex() - 1 ? "scale-[0.8] sm:-translate-x-40 -translate-x-20 z-[1]" : // prev
					"scale-[0.6] z-0" // hidden
				} absolute h-40 sm:h-56 md:h-72 rounded-xl overflow-hidden flex items-center bg-background transition-[transform,height] ease-in-out duration-500 pointer` }>
					<img class={ `${ index() != props.currentIndex() ? "opacity-20" : "opacity-80" } max-x-full duration-500 ease-in-out transition-opacity max-h-full` } onClick={ () =>
						index() == props.currentIndex() ? url ? window.location.href = url : null : props.setIndex(index()) && props.setLastChanged(Date.now())
					} draggable={ false } src={ img } />
				</div>
			}
		</For>
	</div>
};

export default Image;