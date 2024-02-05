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
						<img src="" alt="About Anurag Sharma" />
					</div>
				</div>
				<div className="about-content">
					<div className="about-cards">
						<article className="about-card">
							<FaAward className="about-icon" />
							<h5>Experience</h5>
							<small>
								3 years <br />
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
								BTech. JKLU, Jaipur <br />
								Bhavani Niketan
							</small>
						</article>
					</div>
					<p>
						I'm a frontend developer currently working with the GUI
						of FEED, a large scale Product Information Management
						system using Angular, NodeJS, TypeScript, HTML, LESS,
						Git, IntelliJ, Jira & Material UI. My daily
						responsibilities center around creating and maintaining
						user interfaces that comunicating and exchanging data
						with API's as well as creating and designing an
						effective user experience.
					</p>
					<p>
						When I'm not coding at my job, I run a coding YouTube
						channel with 9K subscribers and counting, called How To
						Become A Developer, which has also been shared by
						freeCodeCamp.org. This is the best place to see my code
						and reasoning. Check it out
						<a href="https://www.youtube.com/"> HERE</a>.
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
