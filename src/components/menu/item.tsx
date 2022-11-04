import { Accessor, createEffect } from "solid-js";

const Item = (props: { hidden: Accessor<Boolean>, name: string, link: string, delay: number }) => {
	let link: HTMLAnchorElement;

	createEffect(() =>
		props.hidden() ? link.classList.add("-translate-x-full", "-ml-4") :
		link.classList.remove("-translate-x-full", "-ml-4")
	);

	return <a ref={ link! } class={ `duration-1000 delay-${ props.delay } group pointer cursor-none p-2 -translate-x-full -ml-4 transition-[transform,margin] block w-fit` } href={ props.link }>
		<h1 class="text-text select-none uppercase font-monserrat text-xl font-bold w-fit">
			{ props.name }
		</h1>
		<hr class="font-montserrat group-hover:text-4xl transition-size duration-700 ease-out border rounded-full" style={{
			width: `${ props.name.length * 0.7 }ch`
		}}/>
	</a>
};

export default Item;