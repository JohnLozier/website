import styles from "./post.module.css";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Markdown from "react-markdown";
import { promises as fs } from "fs";
import matter from "gray-matter";
import RemarkGfm from "remark-gfm";
import RemarkMath from "remark-math";
import RehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Menu from "../../../components/menu";
import Overlay from "../../../components/overlay";

import ProjectsOverlay from "../../../assets/png/projects.png";
import HomepageOverlay from "../../../assets/png/homepage.png";
import Back from "../../../assets/svg/back.svg";
import Favicon from "../../../assets/favicon.ico";

const Post = ({ post, title, date }) => {

	const overlay = React.createRef();

	return (
		<>
			<Head>
				<title>{ title }</title>
				<link rel="icon" type="image/x-icon" href={ Favicon.src }/>
			</Head>
			<Link href="/blog"><a id={ styles.back }><Back/></a></Link>
			<Menu overlay={ overlay }/>
			<Overlay overlay={ overlay } sides={ [["Projects", "/projects", "Recent Blog Posts", `url(${ ProjectsOverlay.src })`], ["Homepage", "/", "Links + More Info", `black url(${ HomepageOverlay.src }) no-repeat scroll center / cover`]] }/>
			<div id={ styles.container }>
				<div id={ styles.postContainer }>
					<h1 id={ styles.title }>{ title }</h1>
					<h6 id={ styles.date }>{ date }</h6>
					<div id={ styles.contentContainer }>
						<Markdown children={ post } components={{ code: ({ children, className, inline }) => { return (<SyntaxHighlighter className={ styles.code } language={ className?.split("language-")[1] ?? "" } style={ vscDarkPlus } showLineNumbers={ !inline ?? false }>{ children[0] }</SyntaxHighlighter>) } }} id={ styles.post } remarkPlugins={ [ RemarkGfm, RemarkMath ] } rehypePlugins={ [ RehypeKatex ] }/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;

export const getStaticPaths = async() => {
	return {
		paths: [...(await fs.readdir("assets/markdown")).map(file => { return { params: { id: file.replace(".md", "") } }; }) ],
		fallback: false
	};
};
  

export const getStaticProps = async(context) => {
	
	const post = matter(await fs.readFile(`assets/markdown/${ context.params.id }.md`, "utf8"));

	return {
		props: {
			post: post.content,
			title: post.data.title,
			date: post.data.date,
		}
	};
};