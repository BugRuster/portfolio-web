import "./Testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: "/images/avatars/krisha-avatar.png",
		name: "Krisha",
		review: "Anurag Sharma is an outstanding software developer who brought unparalleled expertise to our projects. His meticulous attention to detail, problem-solving skills, and commitment to excellence made him a valuable asset to our team. Anurag's ability to seamlessly navigate both web development and hybrid app creation showcases his versatility and dedication to delivering top-notch solutions.",
	},
	{
		avatar: "/images/avatars/sachin-avatar.png",
		name: "Sachin Chawala",
		review: "Anurag Sharma is an outstanding software developer who brought unparalleled expertise to our projects. His meticulous attention to detail, problem-solving skills, and commitment to excellence made him a valuable asset to our team. Anurag's ability to seamlessly navigate both web development and hybrid app creation showcases his versatility and dedication to delivering top-notch solutions.",
	},
	{
		avatar: "/images/avatars/ashish-avatar.png",
		name: "Ashish Kumar",
		review: "It's rare to find someone as passionate and knowledgeable about cybersecurity as Anurag. His dedication to ensuring the security of digital systems is evident in the projects he's undertaken. Anurag's insights and proactive approach make him a trusted ally in the ever-evolving landscape of cybersecurity.",
	},
	{
		avatar: "/images/avatars/ashutosh-avatar.png",
		name: "Ashutosh Tiwari",
		review: "Anurag's foray into AI/ML demonstrates his forward-thinking approach to technology. His contributions to AI projects reflect a keen understanding of machine learning principles and an ability to apply them creatively. Anurag is not just a developer; he's an innovator pushing the boundaries of what's possible in the world of artificial intelligence.",
	},
];

function Testimonials() {
	return (
		<section id="testimonials">
			<h5>Reviews from Coworkers</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonials-container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map((data, index) => (
					<SwiperSlide key={index} className="testimonial">
						<div className="coworker-avatar">
							<img src={data.avatar} alt="Coworker" />
						</div>
						<h5 className="coworker-name">{data.name}</h5>
						<small className="coworker-review">{data.review}</small>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Testimonials;
