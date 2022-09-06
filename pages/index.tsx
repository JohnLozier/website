import { Link } from "@solidjs/router";

const Index = () => {
	return <div class="flex w-full h-full justify-center items-center select-none">
		<div class="w-2/6 h-5/6 bg-slate-100 rounded-2xl flex flex-col shadow-lg">
			<h1 class="text-5xl mt-5 font-montserrat font-bold text-center text-gray-700">Sorry we are down for maintenance</h1>
			<h3 class="text-2xl mt-5 font-opensans text-center mx-5 text-gray-500">We should be back up in a month of two better than before, so you won't have to wait long</h3>
			<div class="text-20xl self-center -mt-20">🚧</div>
			<h3 class="text-2xl mt-5 font-opensans text-center mx-5 text-gray-500">In the meantime you can go check out my new project <Link class="text-blue-700 opacity-50" href="/codetyper">CodeTyper</Link> or my <Link class="text-blue-700 opacity-50" href="https://github.com/JohnLozier">Github</Link>!</h3>
		</div>
	</div>
};

export default Index;