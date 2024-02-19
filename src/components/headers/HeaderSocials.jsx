import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function HeaderSocials() {
	return (
		<div className="header-socials">
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
	);
}

export default HeaderSocials;
