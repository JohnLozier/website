import styles from "./styles/overlay.module.css";
import React from "react";
import Link from "next/link";

const Overlay = ({ sides, overlay }) => {
    return (
        <div id={ styles.container } ref={ overlay }>
			<Link href={ sides[0][1] }><a className={ styles.subContainer }><div style={{ background : sides[0][3] }} className={ styles.image }><h1 className={ styles.title }>{ sides[0][0] }</h1><h3 className={ styles.subtitle }>{ sides[0][2] }</h3></div></a></Link>
			<Link href={ sides[1][1] }><a className={ styles.subContainer }><div style={{ background : sides[1][3] }} className={ styles.image }><h1 className={ styles.title }>{ sides[1][0] }</h1><h3 className={ styles.subtitle }>{ sides[1][2] }</h3></div></a></Link>
		</div>
    );
};

export default Overlay;