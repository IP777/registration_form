import React from "react";
import style from "./Header.module.css";

const Header = (name) => (
	<div className={style.head_wrapper}>
		<div className={style.logo}>Social Site</div>
	</div>
);

export default Header;
