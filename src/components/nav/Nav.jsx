import "./Nav.css";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";

function Nav() {
	const [activeItem, setActiveItem] = useState("#");

	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveItem("#")}
				className={activeItem === "#" ? "active" : ""}
			>
				<GoHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveItem("#about")}
				className={activeItem === "#about" ? "active" : ""}
			>
				<LuUser2 />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveItem("#experience")}
				className={activeItem === "#experience" ? "active" : ""}
			>
				<FiBook />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActiveItem("#portfolio")}
				className={activeItem === "#portfolio" ? "active" : ""}
			>
				<RiServiceLine />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveItem("#contact")}
				className={activeItem === "#contact" ? "active" : ""}
			>
				<LuMessageSquare />
			</a>
		</nav>
	);
}

export default Nav;
