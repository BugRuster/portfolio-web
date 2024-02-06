import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

function Header() {
	return (
		<header id="home">
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Anurag Sharma</h1>
				<h5 className="text-light">
					Full Stack Dev | Cyber Security | Networking
				</h5>
				{/* call to action */}
				<CTA />
				<HeaderSocials />
				<div className="anurag">
					<img
						src="images/profile-image.png"
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
