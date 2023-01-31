import { addElement } from "../lib/scroll";

const Title = () => {
	
	let titleRef: HTMLDivElement;

	addElement(() => titleRef, 0);

	return <div ref={ titleRef! } class="h-screen w-screen flex flex-col justify-center">
		<div class="w-3/5 ml-title max-w-4xl">
			<h3 class="select-none animation-delay-100 animate-blur opacity-0 blur-[8px] font-montserrat uppercase w-fit text-3xl font-extrabold text-sky-200 drop-shadow-welcome">Welcome, I'm</h3>
			<h1 class="w-fit opacity-0 relative animate-name animation-delay-100 select-none sm:text-7xl md:text-8xl lg:text-12xl pointer uppercase font-montserrat text-transparent font-extrabold text-4xl leading-none bg-gradient-to-br from-cyan-300 to-sky-600 bg-clip-text drop-shadow-title hover:drop-shadow-titleHover transition-[transform, filter] duration-500 hover:-translate-y-2 whitespace-nowrap">John Lozier</h1>	
			<h3 class="text-2xl font-montserrat uppercase font-extrabold text-subtitle sm:w-full w-6/5">
				{
					"A student software developer interested in fullstack applications and machine learning".split("").map((letter, index) =>
						<span class="animate-opacity opacity-0" style={{
							"animation-delay": `${ index * 50 + 500 }ms`,
						}}>{ letter }</span>
					)
				}
			</h3>
		</div>
	</div>
}; 

export default Title;