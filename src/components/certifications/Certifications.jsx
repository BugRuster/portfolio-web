import "./Certifications.css";

const data = [
	{
		id: 1,
		title: "Cisco Certified Network Associate Security",
		imgSrc: "../../assets/images/certifications/ccna.png",
		showLink:
			"https://www.credly.com/badges/b34cf7f8-4c14-47f5-a965-38768243dbc2",
	},
	{
		id: 2,
		title: "Introduction to Personal Branding",
		imgSrc: "../../assets/images/certifications/intro-to-personal-branding.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/Z93F772GD8WU",
	},
	{
		id: 3,
		title: "Cybersecurity Roles, Processes & Operating System Security",
		imgSrc: "../../assets/images/certifications/cybersecurity-roles-processes-and-os-security.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/TCUE6JEESK2T",
	},
	{
		id: 4,
		title: "High-Impact Business Writing",
		imgSrc: "../../assets/images/certifications/high-impact-business-writing.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/58YW4Z3HAGFZ",
	},
	{
		id: 5,
		title: "Data Structures",
		imgSrc: "../../assets/images/certifications/data-structures.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/58YW4Z3HAGFZ",
	},
	{
		id: 6,
		title: "Introduction to Bash Shell Scripting",
		imgSrc: "../../assets/images/certifications/intro-to-bash-shell-scripting.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/33SZPBKBGEXG",
	},
	{
		id: 7,
		title: "Cyber Security Fundamentals",
		imgSrc: "../../assets/images/certifications/cyber-security-fundamentals.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/2R8XDRU5DNQ5",
	},
	{
		id: 8,
		title: "Introduction to Cybersecurity Tools & Cyber Attacks",
		imgSrc: "../../assets/images/certifications/intro-to-cybersecurity-tools-and-cyber-attacks.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/5T9PZZCVB2EZ",
	},
	{
		id: 9,
		title: "Java (Basic) Certificate",
		imgSrc: "../../assets/images/certifications/java-basic-certificate.png",
		showLink: "https://www.hackerrank.com/certificates/c9c47f866df0",
	},
	{
		id: 10,
		title: "Python (Basic) Certificate",
		imgSrc: "../../assets/images/certifications/python-basic-certificate.png",
		showLink: "https://www.hackerrank.com/certificates/454ba8741101",
	},
	{
		id: 11,
		title: "Introduction to Virtual Reality",
		imgSrc: "../../assets/images/certifications/intro-to-virtual-reality.png",
		showLink:
			"https://www.coursera.org/account/accomplishments/verify/UWBX29JUEHBX",
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
