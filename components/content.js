import styles from "./styles/content.module.css";
import React, { useEffect } from "react";

const Text = ({ text, side, title }) => {

	const content = React.useRef();

	useEffect(() => {
		content.current.innerHTML = text;
	}, []);
	
	return (
		<div className={ `${ styles.container } ${ styles[ side ] }` }>
			<h4 className={ styles.title }>{ title }</h4>
			<p className={ styles.text } ref={ content }></p>
		</div>
	);
};

const Image = (props) => {
	return (
		<props.image className={ styles.image }/>
	)
}

export { Text, Image };