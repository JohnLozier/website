import { A } from "@solidjs/router";
import type { Accessor } from "solid-js";

const Item = (props: { shown: Accessor<Boolean>, name: string, link: string, delay: number }) => {
	let linkRef: HTMLHeadingElement;

	return <A class={ `duration-1000 delay-${ props.delay } group pointer cursor-none p-2 transition-[transform,margin] block w-fit${ props.shown() ? "" : " -translate-x-full -ml-4" }` } href={ props.link }>
		<h1 ref={ linkRef! } class="text-text select-none uppercase font-monserrat text-xl font-bold w-fit">
			{ props.name }
		</h1>
		<hr class="font-montserrat group-hover:text-4xl transition-size duration-700 ease-out border rounded-full" style={{
			width: `${ props.name.length * 0.7 }ch`
		}}/>
	</A>
};

export default Item;