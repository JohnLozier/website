import styles from "../styles/projects.module.css";
import React from "react";
import Head from "next/head";

import Menu from "../components/menu";
import Overlay from "../components/overlay";
import Project from "../components/project";

import CanvasPlus from "../assets/svg/canvasPlus.svg";
import CryptoPrices from "../assets/svg/cryptoPrices.svg";
import Logo from "../assets/svg/logo.svg"
import HomepageOverlay from "../assets/png/homepage.png";
import BlogOverlay from "../assets/png/blog.png";

const Projects = () => {

	const overlay = React.createRef();

	return (
		<div id={ styles.container }>
			<Head>
				<title>Projects</title>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
			</Head>
			<Menu overlay={ overlay }/>
			<Overlay overlay={ overlay } sides={ [["Homepage", "/", "Links + More Info", `black url(${ HomepageOverlay.src }) no-repeat scroll center / cover`, "contain"], ["Blog", "/blog", "Current + Upcoming Projects", `black url(${ BlogOverlay.src }) no-repeat scroll center / cover`, "contain"]] }/>
			<h1 id={ styles.title }>PROJECTS</h1>
			<div id={ styles.projects }>
				<Project title="Canvas+" text="Canvas+ is a chrome and firefox extension that adds features to the school webpage Canvas. At the time of writing it adds dark/dim mode, search, quick inbox, quiz refill and much more. It has 5 stars on the chrome and firefox web stores and over 1k users (we are about to hit 2k). We have very big plans for the extensions future including a new custom navigation page and more! Check it out and download the extension for yourself!" image={ CanvasPlus } repo="canvasplus"/>
				<Project title="Crypto Prices" text="Crypto Prices is another chrome and firefox extension that makes it easy to quickly check crypto prices. Its features include dark mode, useful links, search, and a 7 day graph. I originally created it after I was sick of having to search up individual currency's on finance sites, so I decided to spend a few days solving this issue. The first version was frankly very bad, so a few months later I re-did it with my updated skills, and then re-did the entire thing again in reactjs after noticing some minor bugs. This will almost definitly be the final version of the extension (I mean it this time)." image={ CryptoPrices } repo="J-The-Dev/cryptoPrices"/>
				<Project title="Website/Blog" text="The website you are looking at right now was coded in React with NextJS. This was my first time making a website along with my first time using NextJS/React, and I certainly learned a lot. Mostly on the most efficient ways to design and develope a project. If you are interested I will go into a lot more depth in my first blog post." image={ Logo } repo="J-The-Dev/Website"/>
			</div>
		</div>
	);
};

export default Projects;
