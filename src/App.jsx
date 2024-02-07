import { useState, useEffect } from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import Header from "./components/headers/Header";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Certifications from "./components/certifications/Certifications";

function App() {
	// website preloader animation
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Header />
					<Nav />
					<About />
					<Experience />
					<Portfolio />
					<Certifications />
					<Testimonials />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
