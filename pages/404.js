import styles from "../styles/404.module.css";
import React from "react";
import Head from "next/head";

import Header from "../components/header";
import { Text, Image } from "../components/content";
import Menu from "../components/menu";
import Overlay from "../components/overlay";
import Footer from "../components/footer";

import TopDivider from "../assets/svg/topDivider.svg";
import BottomDivider from "../assets/svg/bottomDivider.svg";
import Hobbies from "../assets/svg/hobbies.svg";
import Projects from "../assets/svg/projects.svg";
import Error from "../assets/svg/error.svg";
import ProjectsOverlay from "../assets/png/projects.png";
import BlogOverlay from "../assets/png/blog.png";

const Fof = () => {

	const overlay = React.createRef();

	return (
		<div id={ styles.container }>
			<span id={ styles.fof }>
				<div id={ styles.errorContainer }>
					<Error/>
					<h3 id={ styles.text }>Sorry, but that page does exist. You have been redirected to the homepage.</h3>
				</div>
			</span>
			<Head>
				<title>John Lozier</title>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
			</Head>
			<Menu overlay={ overlay }/>
			<Overlay overlay={ overlay } sides={ [["Projects", "/projects", "Recent Blog Posts", `url(${ ProjectsOverlay.src })`], ["Blog", "/blog", "Current + Upcoming Projects", `black url(${ BlogOverlay.src }) no-repeat scroll center / cover`, "contain"]] }/>
			<Header/>
			<TopDivider className={ styles.divider } viewBox="0 0 11 1" width="100%" height="100%"/>
			<div id={ styles.contentContainer }>
				<Text title="A little about me" text="Hi, I'm John. I'm a 7th grader that is interested in tech, software development, internet privacy, and crypto. I am currently most interested in front-end web development and cryptocurrencies/decentralization but plan on expanding my skill set. I also enjoy playing violin with orchestra, tennis, and math (especially algebra). You can find all of my current projects and what I'm doing <a href='https://github.com/J-The-Dev'>here</a>."/>
				<Image image={ Hobbies }/>
				<Image image={ Projects }/>
				<Text title="Projects" text="My projects include: Canvas+ a chrome extension for the school website canvas that I made with <a href='https://github.com/adriancasares'>Adrian Casares</a> that adds features such as dark mode, search, and a lot more. Crypto Prices is another chrome extension that makes it easy to quickly check crypto prices, its features include dark mode, useful links, and even a 7-day graph. More projects coming soon..."/>
			</div>
			<BottomDivider className={ styles.divider } style={{ background: "linear-gradient(white 90%, #313131)" }} viewBox="0 0 11 1" width="100%" height="100%"/>
			<Footer/>
		</div>
	);
};

export default Fof;