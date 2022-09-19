import type { JSXElement } from "solid-js";

// import makeIntersectionObserver from "@solid-primitives/intersection-observer";

// // @ts-ignore
// const { add } = makeIntersectionObserver([], entries => {
// 	entries.forEach((entry: IntersectionObserverEntry) => {
// 		console.log(entry.target);
// 		// if (entry.isIntersecting) {
			
// 		// }
// 	});
// });

const Transition = (props: { children: JSXElement }) => {
	// add(props.children as Element);
	return props.children;
};

export default Transition;
