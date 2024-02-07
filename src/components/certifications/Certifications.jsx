import "./Certifications.css";

const data = [
	{
		id: 1,
		title: "Cisco Certified Network Associate Security",
		imgSrc: "/images/certifications/ccna.png",
		showLink:
			"https://www.credly.com/badges/b34cf7f8-4c14-47f5-a965-38768243dbc2",
	},
	{
		id: 2,
		title: "Cybersecurity Roles, Processes & Operating System Security",
		imgSrc: "/images/certifications/cybersecurity-roles-processes-and-os-security.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/TCUE6JEESK2T",
	},
	{
		id: 3,
		title: "Data Structures",
		imgSrc: "/images/certifications/data-structures.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/58YW4Z3HAGFZ",
	},
	{
		id: 4,
		title: "Introduction to Bash Shell Scripting",
		imgSrc: "/images/certifications/intro-to-bash-shell-scripting.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/33SZPBKBGEXG",
	},
	{
		id: 5,
		title: "Cyber Security Fundamentals",
		imgSrc: "/images/certifications/cyber-security-fundamentals.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/2R8XDRU5DNQ5",
	},
	{
		id: 6,
		title: "Introduction to Cybersecurity Tools & Cyber Attacks",
		imgSrc: "/images/certifications/intro-to-cybersecurity-tools-and-cyber-attacks.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/5T9PZZCVB2EZ",
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
