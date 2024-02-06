import "./Certifications.css";

const data = [
	{
		id: 1,
		title: "Cisco Certified Network Associate Security",
		imgSrc: "src/assets/images/certifications/ccna-img.png",
		showLink:
			"https://www.credly.com/badges/b34cf7f8-4c14-47f5-a965-38768243dbc2",
	},
	{
		id: 2,
		title: "Introduction to Personal Branding",
		imgSrc: "src/assets/images/certifications/intro-to-personal-branding.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/Z93F772GD8WU",
	},
	{
		id: 3,
		title: "Cybersecurity Roles, Processes & Operating System Security",
		imgSrc: "src/assets/images/certifications/cybersecurity-roles-processes-and-os-security-img.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/TCUE6JEESK2T",
	},
];

function Certifications() {
	return (
		<section id="certifications">
			<h5>Have a look at</h5>
			<h2>My Licenses & Certifications</h2>
			<div className="container certifications-container">
				{data.map((data) => (
					<article key={data.id} className="certifications-item">
						<div className="certifications-item-image">
							<img
								src={data.imgSrc}
								alt={data.title}
								className="certifications-image"
							/>
						</div>
						<h3>{data.title}</h3>
						<div className="certifications-item-cta">
							<a
								target="_blank"
								href={data.showLink}
								className="btn btn-primary"
							>
								Show
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Certifications;
