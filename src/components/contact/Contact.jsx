import "./Contact.css";
import { useState } from "react";
import emailJS from "@emailjs/browser";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

function Contact() {
	// EmailJS configs
	const EMAILJS_SERVICE_ID = "service_hxwjhpn";
	const EMAILJS_TEMPLATE_ID = "template_gmg7quo";
	const EMAILJS_PUBLIC_KEY = "MILREBnmkS5Qmwz_-";

	const [isEmailSent, setIsEmailSent] = useState(false);

	// send the email using EmailJS
	const sendEmail = (evt) => {
		evt.preventDefault();
		console.log(evt.target);
		emailJS
			.sendForm(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				evt.target,
				EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setIsEmailSent(true);
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	};

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
					</article>

					<article className="contact-option">
						<FaPhone />
						<h4>Phone</h4>
						<h5>+91 9001233651</h5>
					</article>
				</div>

				{/* CONTACT FORM */}
				{isEmailSent ? (
					<h2 id="contact-send-message">
						Your message was successfully sent!
					</h2>
				) : (
					<form onSubmit={sendEmail}>
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
