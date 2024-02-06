import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Certifications from "./components/certifications/Certifications";

function App() {
	return (
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
	);
}

export default App;
