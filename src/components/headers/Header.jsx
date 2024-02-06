import "./Header.css";
import CTA from "./CTA";
import profileImage from "../../assets/images/profile-image.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
	return (
		<header>
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Anurag Sharma</h1>
				<h5 className="text-light">
					Flutter Developer | Cyber Security | Cisco
				</h5>
				{/* call to action */}
				<CTA />
				<HeaderSocials />
				<div className="anurag">
					<img
						src={profileImage}
						alt="Anurag Sharma"
						className="profile-img"
					/>
				</div>
				<a href="#contact" className="scroll-down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
