import "./Experience.css";
import { SiMui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";

function Experience() {
	return (
		<section id="#experience">
			<h5>The skills I have</h5>
			<h2>My Experience</h2>
			<div className="container xp-container">
				{/* FRONTEND */}
				<div className="xp-frontend">
					<h3>Frontend Development</h3>
					<div className="xp-content">
						<article className="xp-details">
							<FaReact className="xp-details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<SiMui className="xp-details-icon" />
							<div>
								<h4>Material UI</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<IoLogoJavascript className="xp-details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<AiOutlineHtml5 className="xp-details-icon" />
							<div>
								<h4>HTML5</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>
					</div>
				</div>
				{/* BACKEND */}
				<div className="xp-backend">
					<h3>Backend Development</h3>
					<div className="xp-content">
						<article className="xp-details">
							<SiMongodb className="xp-details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<FaNodeJs className="xp-details-icon" />
							<div>
								<h4>NodeJS</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<SiExpress className="xp-details-icon" />
							<div>
								<h4>ExpressJS</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<SiFlutter className="xp-details-icon" />
							<div>
								<h4>Flutter</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
