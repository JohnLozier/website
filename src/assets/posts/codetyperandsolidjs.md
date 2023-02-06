---

title: CodeTyper + SolidJS
preview: This post discusses the development of Codetyper and my thoughts on SolidJS.
image: /svgs/languages/solidjs.svg
date: 1675651249541 

---

## Codetyper

My main inspiration behind [Codetyper](/codetyper) was [Monkeytype](https://monkeytype.com) which had a very nice UI and smooth experience. Monkeytype was really good for practicing wpm but lacked the option to practice typing with the syntax and patterns of writing code. So I decided to do it myself, I had also been longing to use typescript and try out some new frameworks other than react.

<img src="../../../dist/images/codetyper.png" />

I decided to use GitHub's API to get a random code sample to type because GitHub has the biggest database and is used by almost everyone. The random file from GitHub is then cached and processed (a lot) to be a consistent format. Looking back on it this process was probably too overcomplicated and could have been simplified.

One main mistake I made was having all of the code bundled into one file. Which slowed the site down extremely. At the time I didn't know about Vite's code splitting and SolidJS's `lazy()` function which allow for components to be loaded independently resulting in much faster load times.

```ts
import { lazy } from "solid-js";

const Component = lazy(() => import("./component"));
```

Another thing I regret about the site is the user experience. It isn't very intuitive and the UI is a bit clunky. I think I could have done a better job with the UI and UX now after I am a bit better with style and tailwind. Just adding some simple animations and tooltips could have made the feel of the site a lot better. I will probably go back through and add some of these things in the future.

## SolidJS

One reason I started this project was to try and test out some new frameworks before they get old the next week. Currently one of the newest frameworks is [SolidJS](https://solidjs.com). It ranked #1 for the past 2 years on [The State Of JS](https://2022.stateofjs.com/) survey. It solves many of the issues I had with React like the overly complicated reactivity (completely re-rendering) and virtual DOM. SolidJS tackles these problems a lot better than react resulting in a much faster and smarter framework. Instead of re-rendering the entire component, solidJS only re-runs code in effects or the DOM. The only issue with it at the moment is its small community resulting in a lot fewer pre-made components and libraries. This is an issue with all new frameworks and will fix itself as SolidJS doubled its user base in the past year.


```ts
import { createSignal } from "solid-js";

const Counter = () => {

	const [count, setCount] = createSignal(0);

	console.log("rendered") // this will only run once

	return <div>
		<button onClick={ () => setCount(current => current + 1) }>+</button>
		<p>{ count() }</p>
	</div>;
};
```

## TypeScript

This was also my first time using typescript and I don't think I'll ever do a project without it again. Typescript combined with ESlint catches about 80% of my bugs saving a lot of time that would be spent debugging. The typescript suggestions also tend to be better than almost all intellisense suggestions.

## Conclusion

This was a fun project to work on and I learned a lot about SolidJS, TypeScript and regex. I will probably go back and add some more features to the site in the future. I will probably use these frameworks in the future along with experimenting with some other new ones such as Astro.