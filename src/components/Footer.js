import React from "react";


const Footer = () => {
  return (
    <div className="section">
      <div className="account">
        <span className="deleted">Deleted Account</span>
        <br />
        <p className="second-line">
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </p>
        <p className="third-line">Yes, Delete my account</p>
      </div>
      <br />
      <p>
        <span className="team">Get in touch with our support team </span> if you
        have any question or want to leave some feedback.
        <br />
        We’ll be happy to hear from you.
      </p>

     
      <div class="container">
        <nav class="bottom-nav">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
