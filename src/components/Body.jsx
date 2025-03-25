import React from "react";
import "./hero-section.css";
import "./content-section.css";
import "./join-us-section.css";
import groupImage from "../assets/images/group-photo.jpg";

export const Body = () => {
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
          <input type="text" placeholder="Enter your email" />
          <button>Get An Invite</button>
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
