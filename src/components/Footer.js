import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-top">
        <div className="footer-company">
          <h2>Company</h2>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className="footer-communities">
          <h2>Communities</h2>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>
        <div className="footer-useful-links">
          <h2>Useful Links</h2>
          <p>Support</p>
          <p>Free Mobile App</p>
        </div>
        <div className="footer-icons"></div>
      </section>
      <section className="footer-bottom">
        <span>Legal</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
        <span>About Ads</span>
        <span>Your Privacy Choices</span>
        <span>© 2023 Spotify AB</span>
      </section>
    </>
  );
};

export default Footer;
