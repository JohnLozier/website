import Github from "../assets/svg/github.svg";
import Link from "next/link";
import styles from "./styles/footer.module.css";

const Footer = () => {
	return (
		<div id={ styles.container }>
			<div id={ styles.socials }>
				<a className={ styles.image } href="https://github.com/JohnLozier"><Github/></a>
			</div>
			<div id={ styles.linkContainer }>
				<Link href="/projects"><a className={ styles.links }>Projects</a></Link>
				<Link href="/blog"><a className={ styles.links }>Blog</a></Link>
				<a href="https://github.com/JohnLozier/Website" className={ styles.links }>Repo</a>
			</div>
		</div>
	);
};

export default Footer;