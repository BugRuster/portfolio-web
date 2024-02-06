import "./About.css";
import { FaAward } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";

function About() {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About Me</h2>
			<div className="container about-container">
				<div className="about-me">
					<div className="about-me-image">
						<img
							src="images/about-image.png"
							alt="About Anurag Sharma"
							className="about-img"
						/>
					</div>
				</div>
				<div className="about-content">
					<div className="about-cards">
						<article className="about-card">
							<FaAward className="about-icon" />
							<h5>Experience</h5>
							<small>
								3 years of <br />
								Develper Experience
							</small>
						</article>

						<article className="about-card">
							<IoRocketSharp className="about-icon" />
							<h5>Projects</h5>
							<small>
								40+ Completed <br />
								and Counting
							</small>
						</article>

						<article className="about-card">
							<MdSchool className="about-icon" />
							<h5>Education</h5>
							<small>
								BTech- JKLU <br />
								& <br />
								Eklavya International Academy
							</small>
						</article>
					</div>
					<p>
						Greetings! I'm Anurag Sharma, a seasoned software
						developer with a passion for crafting impactful digital
						experiences. With a solid foundation in networking from
						Cisco and a coveted CCNA certification, I've honed my
						skills in building robust websites and hybrid apps for
						mobile platforms.
					</p>
					<p>
						My journey in the world of programming led me to achieve
						a 4-star rating on CodeChef, showcasing my prowess in
						problem-solving with Data Structures and Algorithms.
						Beyond conventional development, my interests extend to
						the realm of cybersecurity, where I've delved into
						securing digital landscapes.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
