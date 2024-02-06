import "./Experience.css";
import { GrMysql } from "react-icons/gr";
import { SiCisco } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";

function Experience() {
	return (
		<section id="experience">
			<h5>The skills I have</h5>
			<h2>My Experience</h2>
			<div className="container xp-container">
				{/* FRONTEND */}
				<div className="xp-frontend">
					<h3>Frontend Development</h3>
					<div className="xp-content">
						<article className="xp-details">
							<AiOutlineHtml5 className="xp-details-icon" />
							<div>
								<h4>HTML5</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<FaCss3 className="xp-details-icon" />
							<div>
								<h4>CSS3</h4>
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
				{/* BACKEND */}
				<div className="xp-backend">
					<h3>Backend Development</h3>
					<div className="xp-content">
						<article className="xp-details">
							<SiCisco className="xp-details-icon" />
							<div>
								<h4>Networking</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<FaLinux className="xp-details-icon" />
							<div>
								<h4>Linux</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<TbBrandCpp className="xp-details-icon" />
							<div>
								<h4>C/C++</h4>
								<small className="text-light">
									Experienced
								</small>
							</div>
						</article>

						<article className="xp-details">
							<GrMysql className="xp-details-icon" />
							<div>
								<h4>MySQL</h4>
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
