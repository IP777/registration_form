import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => (
	<ul className={style.nav_list}>
		<li className={style.nav_item}>
			<NavLink
				to="/"
				className={style.link}
				activeClassName={style.active_link}
			>
				Home-Page
			</NavLink>
		</li>
		<li className={style.nav_item}>
			<NavLink
				to="/content"
				className={style.link}
				activeClassName={style.active_link}
			>
				Content-Page
			</NavLink>
		</li>
		<li className={style.nav_item}>
			<NavLink
				to="/login"
				className={style.link}
				activeClassName={style.active_link}
			>
				Login-Page
			</NavLink>
		</li>
		<li className={style.nav_item}>
			<NavLink
				to="/autorisation"
				className={style.link}
				activeClassName={style.active_link}
			>
				Autorisation-Page
			</NavLink>
		</li>
	</ul>
);

export default Navigation;
