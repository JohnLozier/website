import { SHA256, enc } from "crypto-js";
import { createEffect, createSignal } from "solid-js";
import { interval } from "./utils";

const EasterEggs = () => {

	const [ typedWord, setTypedWord ] = createSignal("");

	const salt = "d3e3a8d70ed8";

	document.documentElement.onkeyup = ({ key, target }) =>
		// @ts-expect-error
		key.length == 1 && target?.value == undefined ? setTypedWord(current => current.slice(-10) + key) : null;

	createEffect(() => {
		SHA256(typedWord().slice(-5).toLowerCase() + salt).toString(enc.Hex) == "8475d48d2a9c6d18da3a095d0675b7b01d684f0bfa0156a26fc38365de4ddcc7" && document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(element =>
			// @ts-expect-error
			element.innerText = element.innerText.replace(/\w+/g, typedWord().slice(-5).toLowerCase())
		);

		SHA256(typedWord().slice(-9).toLowerCase() + salt).toString(enc.Hex) == "1ea68b8d650875b4ed44540b212399e1aab60ce446d20d88e9a711119cb2cd04" && document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(element =>
			// @ts-expect-error
			element.innerText = element.innerText.split("").reverse().join("")
		);

		SHA256(typedWord().slice(-7).toLowerCase() + salt).toString(enc.Hex) == "a369e08f90aa248926a50dc9925b3c03e1323aaa9f1755ae97c396914a7c6e59" && document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(element => {
			// @ts-expect-error
			element.style.backgroundClip = "text"; // @ts-expect-error
			element.style.color = "transparent";

			let deg = 45;

			interval(() => {
				// @ts-expect-error
				element.style.backgroundImage = `linear-gradient(${ deg }deg, red, orange, yellow, green, blue, purple)`;
				deg = (deg + 1) % 360;
			}, 10);
		});
	})
};

export default EasterEggs;