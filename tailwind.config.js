module.exports = {
	content: [
		"./index.html",
		"./src/**/*.tsx",
		"./pages/**/*.tsx",
	],
	safelist: [
		"delay-0",
		"delay-250",
		"delay-500"
	],
	theme: {
		extend: {
			fontFamily: {
				"openSans": ["Open Sans", "sans-serif"],
				"montserrat": ["Montserrat", "sans-serif"]
			},
			colors: {
				"background": "#2E3131",
				"highlight": "#242929",
				"dark": "#272C2C",
				"text": "#fff",
				"subtitle": "#D9D9D9"
			},
			dropShadow: {
				"title": "0 0 10px #00A3FF",
				"titleHover": "0 0 15px #00A3FF",
				"welcome": "0 0 5px rgba(255, 255, 255, 0.3)"
			},
			transitionProperty: {
				"filter": "filter",
				"size": "height, width"
			},
			fontSize: {
				"12xl": "8rem"
			},
			width: {
				"6/5": "120%"
			},
			height: {
				"0.75": "0.25rem"
			},
			margin: {
				"title": "min(14rem, 10%)",
				"screen": "100vw"
			},
			gap: {
				"1.5": "6px"
			},
			rotate: {
				"35": "35deg"
			},
			spacing: {
				"exit": "calc(22rem / 35)"
			},
			transitionDelay: {
				"250": "250ms"
			},
			animation: {
				"slide-down": "slide-down 0.5s ease-out forwards"
			},
			keyframes: {
				"slide-down": {
					"0%": {
						transform: "translateY(-100%)"
					},
					"100%": {
						transform: "translateY(0)"
					}
				}
			}
		}
	}
};