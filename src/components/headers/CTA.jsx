import CV from "../../assets/anurag-resume.pdf";

function CTA() {
	return (
		<div className="CTA">
			<a href={CV} className="btn" download>
				Download CV
			</a>
			<a href="#contact" className="btn btn-primary">
				Contact Info
			</a>
		</div>
	);
}

export default CTA;
