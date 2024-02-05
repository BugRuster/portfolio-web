import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa";

function Footer() {
	return (
		<footer>
			<a href="#" className="footer-logo">
				Anurag Sharma
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer-socials">
				<a href="https://www.github.com/bugruster/">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/bugruster/sdfjsdfjsdjifsdjifs">
					<FaLinkedin />
				</a>
				<a href="https://twitter.com/bugruster">
					<FaXTwitter />
				</a>
			</div>
			<div className="footer-copyright">
				<small>&copy; Anurag Sharma. All rights reserved</small>
			</div>
		</footer>
	);
}

export default Footer;