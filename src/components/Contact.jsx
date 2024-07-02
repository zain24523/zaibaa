import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS library
import "./contact.css"; // Assuming you have some CSS styles

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_2omnaam",
        "template_f0smkn5",
        templateParams,
        "ruVEIuNid1jN1xNwa"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setResponseMessage("Email sent successfully!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setResponseMessage("Error sending email.");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="contact1">
        <h3 className="contact1h3">CONTACT US</h3>
        <h1 className="contact1h1">Let's Contact Us</h1>
        <div className="absols"></div>
      </div>
      <form className="contactinp" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name ..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject ..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          rows={10}
          placeholder="Message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="sub">
          <button type="submit">Submit</button>
        </div>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
