module.exports = {
	content: [
		"./src/**/*[.tsx, .jsx, .js, .ts, .astro]"
	],
	plugins: [
		require("tailwindcss-animation")
	],
	safelist: [
		"delay-0",
		"delay-250",
		"delay-500",
		"animate-pulse",
		"animation-delay-100",
		"animation-delay-200",
		"animation-delay-300",
		"animation-delay-400",
		"animation-delay-500",
		"animation-delay-600",
		"animation-delay-700",
		"animation-delay-800",
		"animation-delay-900",
		"animation-delay-1000",
	],
	theme: {
		extend: {
			fontFamily: {
				"openSans": ["Open Sans", "sans-serif"],
				"montserrat": ["Montserrat", "sans-serif"]
			},
			screens: {
				"xsm": "440px"
			},
			backgroundImage: {
				"dotted": "radial-gradient(#ffffff1a 2px,transparent 0)"
			},
			colors: {
				"background": "#1c1e1e",
				"highlight": "#121313",
				"dark": "#161717",
				"text": "#fff",
				"subtitle": "#e3e3e3"
			},
			dropShadow: {
				"title": "0 0 10px #00A3FF",
				"titleHover": "0 0 15px #00A3FF",
				"welcome": "0 0 5px rgba(255, 255, 255, 0.3)",
				"blog": "0 0 10px #4497F9",
				"blogHover": "0 0 15px #6781F9",
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
				"post": "post 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"blur": "blur 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"loading": "loading 1.5s linear forwards",
				"opacity": "opacity 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"line": "line 3s cubic-bezier(.01,.02,.03,1) forwards",
				"appear": "appear 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"card": "card 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"sub-title": "sub-title 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"slide-down": "slide-down 1s cubic-bezier(0.4, 0, 0.2, 1) forwards"
			},
			gridTemplateColumns: {
				"lang": "repeat(auto-fit, minmax(6rem, 1fr))",
				"smallLang": "repeat(auto-fit, minmax(4.5rem, 1fr))"
			},
			keyframes: {
				name: {
					"0%": {
						right: "30rem",
						opacity: "0"
					},
					"100%": {
						right: "0",
						opacity: "1"
					}
				},
				menu: {
					"0%": {
						top: "-3rem"
					},
					"100%": {
						top: "0"
					}
				},
				card: {
					"0%": {
						left: "5rem",
						opacity: "0"
					},
					"50%": {
						left: "0",
					},
					"100%": {
						opacity: "1",
						left: "0"
					}
				},
				post: {
					"0%": {
						right: "20rem",
						opacity: "0"
					},
					"100%": {
						right: "0",
						opacity: "1"
					}
				},
				blur: {
					"0%": {
						filter: "blur(8px)",
						opacity: "0"
					},
					"100%": {
						filter: "blur(0)",
						opacity: "1"
					}
				},
				opacity: {
					"0%": {
						opacity: "0"
					},
					"100%": {
						opacity: "1"
					}
				},
				loading: {
					"0%": {
						opacity: "0",
						width: "50%",
						height: "50%"
					},
					"100%": {
						opacity: "1",
						width: "100%",
						height: "100%"
					}
				},
				line: {
					"0%": {
						width: "0"
					},
					"100%": {
						width: "calc(100% + 2.5rem)"
					}
				},
				appear: {
					"0%": {
						transform: "translateY(-5rem) scale(0.8)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0) scale(1)",
						opacity: "1"
					}
				},
				"sub-title": {
					"0%": {
						right: "15rem",
						opacity: "0"
					},
					"100%": {
						right: "0",
						opacity: "1"
					}
				},
				"slide-down": {
					"0%": {},
					"100%": {
						transform: "translateY(0)"
					}
				}
			}
		}
	}
};