import Transition from "./transitions";

const Title = () => {
	return <div class="h-screen w-screen flex flex-col items-center justify-center">
		<Transition>
			<h1 class="text-title font-montserrat font-bold text-9xl">John Lozier</h1>
		</Transition>
		<h3 class="w-2/5 text-text text-2xl font-openSans text-center">
			Hi, I’m an 8th grader intereseted in crypto, tech and CS. I also enjoy plaing tennis and violin. Currently my favorite framework is SolidJS with TypeScript. I enjoy making useful applications to solve problems or just for the fun of it. In the future I plan on learning more backend languages and getting more into mobile app developement.
		</h3>
	</div>
};

export default Title;