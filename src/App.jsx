import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Portfolio />
			<Testimonials />
			<Contact />
			<p>Hello World!</p>
			<p>Hello World!</p>
			<p>Hello World!</p>
			<p>Hello World!</p>
		</>
	);
}

export default App;
