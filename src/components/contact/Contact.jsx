import "./Contact.css";
import { useState } from "react";
// import emailJS from "emailjs-com";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

function Contact() {
	const [isEmailSent, setIsEmailSent] = useState(false);

	// const sendEmail = (evt) => {
	// 	evt.preventDefault();
	// 	emailJS
	// 		.sendForm(
	// 			"service_jxtv4xm",
	// 			"template_gnxwcoq",
	// 			evt.target,
	// 			"8y4tCAA_-K1JlPEk8"
	// 		)
	// 		.then(() => {
	// 			setIsEmailSent(true);
	// 		});
	// };

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact-container">
				<div className="contact-options">
					<article className="contact-option">
						<IoMailOpenOutline />
						<h4>Email</h4>
						<h5>bugruster@gmail.com</h5>
						<a href="mailto:bugruster@gmail.com">Send a message</a>
					</article>

					<article className="contact-option">
						<FaPhone />
						<h4>Phone</h4>
						<h5>+91 9012390123</h5>
					</article>
				</div>

				{/* CONTACT FORM */}
				{isEmailSent ? (
					<h2 id="contact-send-message">
						Your message was successfully sent!
					</h2>
				) : (
					<form>
						<input
							type="text"
							name="name"
							placeholder="Your Full Name"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							required
						/>
						<textarea
							name="message"
							rows="7"
							placeholder="Your Message"
						></textarea>
						<button type="submit" className="btn btn-primary">
							Send Message
						</button>
					</form>
				)}
			</div>
		</section>
	);
}

export default Contact;
