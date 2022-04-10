import styles from "./styles/menu.module.css";
import { useState } from "react";

import Overlay from "./styles/overlay.module.css";

const Menu = ({ overlay }) => {
	
	const [menuState, openMenu] = useState(false);

	menuState ? overlay?.current?.classList.add( Overlay.shown ) : overlay?.current?.removeAttribute("class");
	
	return (
		<div id={ styles.menu } className={ menuState ? styles.shown : styles.hidden } onClick={ () => openMenu(!menuState) }>
			<div id={ styles.icon }></div>
		</div>
	);
};

export default Menu;