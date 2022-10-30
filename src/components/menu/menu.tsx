import { createSignal, lazy } from "solid-js";

const Item = lazy(() => import("./item"));

const Menu = () => {
	const [shown, setShown] = createSignal(false);
	
	return <>
		<div class="animate-slide-down group w-12 h-12 transition-transform duration-500 fixed top-0 left-0 flex items-center justify-center pointer z-[2]" onClick={ () => setShown(current => !current) }>
			<div class="flex flex-col gap-1.5 group">
				<div class={ `${ shown() ? "rotate-35 translate-y-exit " : "" }transition-[rotate, transform] duration-1000 bg-white w-8 h-0.75` } />
				<div class={ `${ shown() ? "opacity-0 transition-x-0" : "translate-x-2" } transition-[opacity, transform] duration-1000 bg-white w-8 h-0.75` } />
				<div class={ `${ shown() ? "-rotate-35 -translate-y-exit " : "" }transition-[rotate, transform] duration-1000 bg-white w-8 h-0.75` } />
			</div>
		</div>
		<div class={ `${ shown() ? "opacity-60 " : "opacity-0 pointer-events-none " }w-screen h-screen bg-black z-[1] fixed transition-opacity duration-1000` } onClick={ () => setShown(false) }>
			<div class="top-10 left-4 relative w-fit">
				<Item shown={ shown } name="Homepage" link="/" delay={ 0 }/>
				<Item shown={ shown } name="Blog" link="/blog" delay={ 250 }/>
				<Item shown={ shown } name="Github" link="https://github.com/JohnLozier" delay={ 500 }/>
			</div>
		</div>
	</>
};

export default Menu;