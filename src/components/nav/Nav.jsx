import "./Nav.css";
import { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { FiBook } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { LuMessageSquare } from "react-icons/lu";

function Nav() {
	const [activeItem, setActiveItem] = useState("home");

	const handleClick = (item) => {
		setActiveItem(item);
		scrollToSection(item);
	};

	const scrollToSection = (item) => {
		const ele = document.getElementById(item);
		ele.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const sections = document.querySelectorAll("section");

			sections.forEach((item) => {
				const sectionTop = item.offsetTop;
				const sectionHeight = item.offsetHeight;

				if (
					scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
					scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
				) {
					setActiveItem(item.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav>
			<a
				href="#home"
				onClick={() => handleClick("home")}
				className={activeItem === "home" ? "active" : ""}
			>
				<GoHome />
			</a>
			<a
				href="#about"
				onClick={() => handleClick("about")}
				className={activeItem === "about" ? "active" : ""}
			>
				<LuUser2 />
			</a>
			<a
				href="#experience"
				onClick={() => handleClick("experience")}
				className={activeItem === "experience" ? "active" : ""}
			>
				<FiBook />
			</a>
			<a
				href="#portfolio"
				onClick={() => handleClick("portfolio")}
				className={activeItem === "portfolio" ? "active" : ""}
			>
				<RiServiceLine />
			</a>
			<a
				href="#certifications"
				onClick={() => handleClick("certifications")}
				className={activeItem === "certifications" ? "active" : ""}
			>
				<GrCertificate />
			</a>
			<a
				href="#contact"
				onClick={() => handleClick("contact")}
				className={activeItem === "contact" ? "active" : ""}
			>
				<LuMessageSquare />
			</a>
		</nav>
	);
}

export default Nav;
