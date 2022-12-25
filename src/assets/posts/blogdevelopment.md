---

title: Blog Development
preview: This blog post discusses the process and things I learned when making a website in React with NextJS.
image: /svgs/languages/solidjs.svg
date: 2022-4-9

---


## First Experience

This post discusses my first blog (not this one), which was coded in nextjs and react.

This was my first time working with NextJS, and also my first time working with React other than a small part of the Canvas+ popup. It has been a great experience. Inline js, components, and hooks make the code a lot cleaner and easier to work with. However, there are a few issues I have run into annoyances with React. A slightly annoying thing with React is that it is run before page load, which means doing things such as accessing an element or the window will result in an `undefined` error. You can fix this by using `useEffect()`
```jsx
import { useState } from "react";

const Example = () => {

	useEffect(() => {
		console.log(document.querySelector("#exampleDiv").children, window);
	}, [])

	return (
		<div id="exampleDiv">
			<h1>Welcome to my blog!</h1>
		</div>
	);
};

export default Example;
```
But as you can see this results in semi messy code, and can end up being quite annoying. I think that if you use a class it is a lot simpler with `ComponentDidMount()`, so I may try that out next time.

## Mistakes

- ### Design Before Develope

	The biggest mistake that I made when making the blog was not designing before developing. Because of this, I ended up spending way too long redoing each component until I was satisfied. I probably ended up completely redoing the homepage 3-4 times because of this. However, after learning this the other pages were finished very quickly.

	The software I ended up using to create templates is [Figma](https://figma.com), which I must say for being completely free works extremely well for both prototyping and SVG design.

- ### Document progress

	One thing I heavily regret is not documenting my progress while working on each page (especially if you are writing a post on it). Along with code comments. Documenting progress, such as commenting code instead of deleting it can save you a lot of time when you need to revert to a previous state. Comments are useful by reminding you what a specific function is doing especially if you haven't worked with the code in a while. Along with increasing the readability for others.

## Conclusion 

Overall I did like React and NextJS a lot, and will probably use them in the future. I did find most of the process semi boring due to the lack of executable code but had a good time none the less. I plan on doing mid-length posts similar to this one, hopefully at least once a month (we'll see how that goes).