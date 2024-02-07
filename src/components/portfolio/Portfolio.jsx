import "./Portfolio.css";

const data = [
	{
		id: 1,
		title: "Jigyasa Web and Flutter App",
		imgSrc: "/images/protfolio/jigyasa.png",
		github: "https://github.com/BugRuster/",
		demo: "https://jigyasa.vercel.app/",
	},
	{
		id: 2,
		title: "Todo Flutter App",
		imgSrc: "/images/protfolio/todo.png",
		github: "https://github.com/BugRuster/todo",
		demo: "",
	},
	{
		id: 3,
		title: "Madhyam",
		imgSrc: "/images/protfolio/madhyam.png",
		github: "https://github.com/BugRuster/Sign-Language-Conversation-",
		demo: "",
	},
];

function Portfolio() {
	return (
		<section id="portfolio">
			<h5>Have a look at</h5>
			<h2>My Portfolio</h2>
			<div className="container portfolio-container">
				{data.map((data) => (
					<article key={data.id} className="portfolio-item">
						<div className="portfolio-item-image">
							<img src={data.imgSrc} alt={data.title} />
						</div>
						<h3>{data.title}</h3>
						<div className="portfolio-item-cta">
							<a href={data.github} className="btn">
								GitHub
							</a>
							<a href={data.demo} className="btn btn-primary">
								Demo
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
