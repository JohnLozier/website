module.exports = {
	content: [
		"./index.html",
		"./src/**/*.tsx",
		"./pages/**/*.tsx",
	],
	theme: {
		extend: {
			fontFamily: {
				"openSans": ["Open Sans", "sans-serif"],
				"montserrat": ["Montserrat", "sans-serif"]
			},
			fontSize: {
				"1.5xl": "1.3rem",
				"20xl": "18rem"
			},
			transitionProperty: {
				"top": "top"
			}
		}
	}
};