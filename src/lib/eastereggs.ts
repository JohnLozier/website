import { SHA256, enc } from "crypto-js";
import { createEffect, createSignal } from "solid-js";

const EasterEggs = () => {

	const [ typedWord, setTypedWord ] = createSignal("");

	const salt = "d3e3a8d70ed8";

	document.documentElement.onkeyup = ({ key, target }) =>
		// @ts-expect-error
		key.length == 1 && target?.value == undefined ? setTypedWord(current => current.slice(-10) + key) : null;

	createEffect(() => {
		SHA256(typedWord().slice(-5).toLowerCase() + salt).toString(enc.Hex) == "8475d48d2a9c6d18da3a095d0675b7b01d684f0bfa0156a26fc38365de4ddcc7" && document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(element =>
			// @ts-expect-error
			element.innerText = typedWord().slice(-5).toLowerCase()
		);

		SHA256(typedWord().slice(-9).toLowerCase() + salt).toString(enc.Hex) == "1ea68b8d650875b4ed44540b212399e1aab60ce446d20d88e9a711119cb2cd04" && document.body.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach(element =>
			// @ts-expect-error
			element.innerText = element.innerText.split("").reverse().join("")
		);
	})
};

export default EasterEggs