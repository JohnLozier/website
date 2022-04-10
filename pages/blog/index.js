import styles from "../../styles/blog.module.css";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { promises as fs } from "fs";
import matter from "gray-matter";

import Menu from "../../components/menu";
import Overlay from "../../components/overlay";

import ProjectsOverlay from "../../assets/png/projects.png";
import HomepageOverlay from "../../assets/png/homepage.png";
import Favicon from "../../assets/favicon.ico";

const Home = ({ posts }) => {
	
	const overlay = React.createRef();

	return (
		<div id={ styles.container }>
			<Head>
				<title>Blog</title>
				<link rel="icon" type="image/x-icon" href={ Favicon.src }/>
			</Head>
			<Menu overlay={ overlay }/>
			<Overlay overlay={ overlay } sides={ [["Projects", "/projects", "Recent Blog Posts", `url(${ ProjectsOverlay.src })`], ["Homepage", "/", "Links + More Info", `black url(${ HomepageOverlay.src }) no-repeat scroll center / cover`]] }/>
			<h1 id={ styles.title }>BLOG</h1>
			<div id={ styles.postContainer }>
				{
					posts.map((post, index) => {
						return (
							<Link href={ `/blog/posts/${ post.slug }` } key={ index }>
								<a className={ styles.post }>
									<h3 className={ styles.postTitle }>{ post.title }</h3>
									<hr className={ styles.postLine }/>
									<p className={ styles.postSummery }>{ post.summery }</p>
									<h6 className={ styles.postdate }>{ post.date }</h6>
								</a>
							</Link>
						);
					})
				}
			</div>
		</div>
	);
};

export const getStaticProps = async() => {
	return {
		props: {
			posts: (await Promise.all([...(await fs.readdir("assets/markdown")).map(async(file) => {
				
				const post = matter(await fs.readFile(`assets/markdown/${ file }`, "utf8"));
		
				return {
					title: post.data.title,
					slug: file.replace(".md", ""),
					date: post.data.date,
					summery: post.data.summery
				};
			})])).sort((post1, post2) => {
				Math.round(post2.date.split("-").map(value => ("0" + value).slice(-2)).join("") - Math.round(post1.date.split("-").map(value => ("0" + value).slice(-2)).join("")));
			})
		}
	};
};

export default Home;