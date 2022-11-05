module.exports = {
	content: [
		"./src/**/*[.tsx, .jsx, .js, .ts, .astro]"
	],
	plugins: [
		require("tailwindcss-animation-delay")
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
			backgroundImage: {
				"dotted": "radial-gradient(#ffffff1a 2px,transparent 0)"
			},
			colors: {
				"background": "#1c1e1e",
				"highlight": "#1D2222",
				"dark": "#161717",
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
				"6/5": "120%",
				"135": "35rem"
			},
			height: {
				"0.75": "0.25rem",
				"135": "35rem"
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
				"menu": "menu 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"name": "name 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"slide-down": "slide-down 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"slide-up": "slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"blur": "blur 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"opacity": "opacity 1s cubic-bezier(0.4, 0, 0.2, 1) forwards"
			},
			gridTemplateColumns: {
				"lang": "repeat(auto-fit, minmax(6rem, 1fr))"
			},
			keyframes: {
				"name": {
					"0%": {
						marginLeft: "-100vw"
					},
					"100%": {
						marginLeft: "0"
					}
				},
				"menu": {
					"0%": {
						top: "-3rem"
					},
					"100%": {
						top: "0"
					}
				},
				"slide-down": {
					"0%": {
						transform: "translateY(-100%)"
					},
					"100%": {
						transform: "translateY(0)"
					}
				},
				"slide-up": {
					"0%": {
						transform: "translateY(0)"
					},
					"100%": {
						transform: "translateY(-100%)"
					}
				},
				"blur": {
					"0%": {
						filter: "blur(8px)"
					},
					"100%": {
						filter: "blur(0)"
					}
				},
				"opacity": {
					"0%": {
						opacity: "0"
					},
					"100%": {
						opacity: "1"
					}
				}
			}
		}
	}
};