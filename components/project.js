import styles from "./styles/project.module.css";

import Github from "../assets/svg/github.svg";

const Project = (props) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.textContainer }>
				<h3 className={ styles.title }>{ props.title }</h3>
				<hr className={ styles.line }/>
				<p className={ styles.text }>{ props.text }</p>
			</div>
			<div className={ styles.imageContainer }>
				<div className={ styles.subImageContainer }>
					<props.image height="8em" width="8em"/>
					<a href={ `https://github.com/${ props.repo }` } target="_blank" rel="noopener noreferrer"><Github height="4em" fill="black" className={ styles.github }/></a>
				</div>
			</div>
		</div>
	);
};

export default Project;