import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<footer>
			<a href="#" className="footer-logo">
				Anurag Sharma
				<small className="footer-username">@bugruster</small>
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
					<a href="#certifications">Certifications</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer-socials">
				<a target="_blank" href="https://www.github.com/bugruster/">
					<FaGithub />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/bugruster/">
					<FaLinkedin />
				</a>
				<a target="_blank" href="https://twitter.com/bugruster">
					<FaXTwitter />
				</a>
			</div>
			<div className="footer-copyright">
				<small>&copy; BugRuster. All rights reserved</small>
			</div>
		</footer>
	);
}

export default Footer;
