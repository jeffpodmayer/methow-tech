import React from "react";
import "./hero-section.css";
import "./content-section.css";
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

      <section className="content-section">
        <div className="content-section-container">
          <div className="content-section-header">
            <h2>Come Join Us!</h2>
          </div>
          <div className="content-section-body">
            <div className="content-text">
              <p className="content-section-text">
                We are a small group of people - software developers, tech
                enthusiasts, engineers of all kind - who are excited about
                finding and building community with tech oriented folks in the
                Methow Valley.
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
