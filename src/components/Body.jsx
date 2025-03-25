import React, { useState } from "react";
import "./hero-section.css";
import "./content-section.css";
import "./join-us-section.css";
import emailjs from "@emailjs/browser";
import groupImage from "../assets/images/group-photo.jpg";

export const Body = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // First install EmailJS: npm install @emailjs/browser
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    // Replace with your EmailJS service ID, template ID, and public key
    emailjs
      .send(
        "methow_tech_service",
        "template_7bkuh31",
        {
          email_address: "jeff.podmayer@gmail.com",
          to_name: "Jeff Podmayer",
          message: `New Slack invitation request from: ${email}`,
        },
        "KACfVkbjLK2GrEKWV"
      )
      .then(
        (result) => {
          setSubmitMessage("Thanks! We'll send you an invite soon.");
          setEmail("");
          setIsSubmitting(false);

          // Make the message disappear after 5 seconds (5000 milliseconds)
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        },
        (error) => {
          setSubmitMessage(
            "Sorry, something went wrong. Please try again later."
          );
          setIsSubmitting(false);
          console.error(error);
        }
      );
  };

  console.log("Group image path:", groupImage);
  return (
    <main className="body-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Methow Tech</h1>
        </div>
      </section>

      <section className="content-section join-us-section">
        <div className="join-us-section-header">
          <h2>Join the Slack Channel!</h2>
        </div>
        <div className="join-us-form">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Get An Invite"}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </div>
      </section>

      <section className="content-section">
        <div className="content-section-container">
          <div className="content-section-header">
            <h2>About</h2>
          </div>
          <div className="content-section-body">
            <div className="content-text">
              <p className="content-section-text">
                We are a small group of software developers, tech enthusiasts,
                creatives and engineers who are excited about finding and
                building community with tech oriented folks in the Methow
                Valley. We tend to meet up once a month to either socialize or
                share a recent project one of our members is working on. Stay
                tuned on the Slack channel for more information on meetup
                locations and times.
              </p>
            </div>
            <div className="content-image">
              <img
                src={groupImage}
                alt="Members sharing a project they are working on!"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
