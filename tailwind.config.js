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
			colors: {
				"background": "#2E3131",
				"highlight": "#272C2C",
				"dark": "#242929",
				"title": "#E8E8E8",
				"text": "#939191",
				"light": "#F1F1F1"
			},
		}
	}
};