import { Link } from "@solidjs/router";

const Construction = () => {
	return (
		<div class="flex w-full h-full justify-center items-center select-none">
			<div class="w-2/6 max-h-5/6 pb-5 min-w-min bg-slate-100 rounded-2xl flex flex-col shadow-2xl">
				<h1 class="text-4xl  mt-8 font-montserrat font-bo	ld text-center text-gray-700">Sorry we are down for maintenance</h1>
				<h3 class="text-1.5xl mt-8 font-opensans text-center mx-10 text-gray-500">We should be back up in a month of two better than before, so you won't have to wait long</h3>
				<div class="text-20xl self-center -mt-20">🚧</div>
				<h3 class="text-1.5xl mt-5 font-opensans text-center mx-5 text-gray-500">In the meantime you can go check out my new project <span class="text-blue-700 duration-300 hover:opacity-60 opacity-50 cursor-pointer" onClick={ () => document.location = "/codetyper" }>codetyper</span> or my <Link class="text-blue-700 hover:opacity-60 transition-opacity duration-300 opacity-50" href="https://github.com/JohnLozier">Github</Link>!</h3>
			</div>
		</div>
	);
};

export default Construction;