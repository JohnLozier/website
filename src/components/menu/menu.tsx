const Item = lazy(() => import("./item"));

import { createSignal, lazy } from "solid-js";

import { useNavigate } from "@solidjs/router";

const [remove, setRemove] = createSignal(false);

const Menu = (props: { removed?: true }) => {
	const [shown, setShown] = createSignal(false);

	const navigate = useNavigate();
	
	setRemove(false)

	return <>
		<div class={ `group w-12 h-12 fixed top-0 left-0 flex items-center justify-center duration-1000 pointer z-[2] ${ !shown() || props.removed ? "mix-blend-difference" : "" }` } onClick={ () => !props.removed ? setShown(current => !current) : navigate("/") }>
			<div class="flex flex-col gap-1.5 group">
				<div class={ `${ shown() || remove() || props.removed ? "rotate-35 translate-y-exit group-hover:rotate-[25deg] " : "" }transition-[rotate,transform] relative ${ props.removed ? "animate-none" : "animate-menu -top-12" } animation-delay-400 duration-1000 bg-white w-8 h-0.75` } />
				<div class={ `${ shown() || remove() || props.removed ? "opacity-0 left-0" : "left-1" } transition-[opacity,left,transform] relative ${ props.removed ? "animate-none" : "animate-menu -top-12" } animation-delay-200 duration-1000 bg-white w-8 h-0.75` } />
				<div class={ `${ shown() || remove() || props.removed ? "-rotate-35 -translate-y-exit group-hover:-rotate-[25deg] " : "" }transition-[rotate,transform] relative ${ props.removed ? "animate-none" : "animate-menu -top-12" } duration-1000 bg-white w-8 h-0.75` } />
			</div>
		</div>
		<div class={ `${ shown() ? "opacity-60 " : "opacity-0 pointer-events-none " }w-screen h-screen bg-black z-[1] fixed top-0 transition-opacity duration-1000` } onClick={ () => setShown(false) } />
		<div class="top-10 left-4 z-[1] fixed w-fit" onClick={ () => setShown(false) }>
			<Item shown={ shown } name="Homepage" link="/" delay={ 0 }/>
			<Item shown={ shown } name="Blog" link="/blog" delay={ 250 }/>
			<Item shown={ shown } name="Github" link="https://github.com/JohnLozier" delay={ 500 }/>
		</div>
	</>
};

export default Menu;

const RemoveMenu = () => {
	setRemove(true)
};

export { RemoveMenu };