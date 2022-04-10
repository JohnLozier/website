import styles from "./styles/header.module.css";
import React, { useEffect } from "react";

import Logo from "../assets/svg/logo.svg";

const Header = () => {

	const name = React.useRef();
	const subName = React.useRef();

	useEffect(() => {
		window.onscroll = () => {
			name.current?.style.transform = `translateY(${ window.scrollY < 750 ? (window.scrollY / 5) : 150 }px)`;
			subName.current?.style.transform = `translateY(${ window.scrollY < 750 ? (window.scrollY / 3) : 250 }px)`;
		};
	}, []);

	return (
		<div id={ styles.container }>
			<div id={ styles.background }>
				<Logo id={ styles.logo }/>
			</div>
			<h3 id={ styles.welcome }>Hi, I'm</h3>
			<div id={ styles.nameContainer }>
				<h6 className={ styles.name }>John Lozier</h6>
				<h6 className={ styles.name } ref={ name }>John Lozier</h6>
				<h6 className={ styles.name } ref={ subName }>John Lozier</h6>
			</div>
		</div>
	);
};
  
export default Header;