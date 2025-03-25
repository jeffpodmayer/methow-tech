import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Methow Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
