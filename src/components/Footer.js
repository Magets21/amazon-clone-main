import React from "react";
import { Link } from "react-router-dom";
import Foot from "./Foot";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="foot">
      <div className="footer">
        <ul>
          <h3>Get to Know Us</h3>
          <Foot lists="Careers" />
          <Foot lists="Blog" />
          <Foot lists="About Amazon" />
          <Foot lists="Sustainability" />
          <Foot lists="Press Center" />
          <Foot lists="Investor Relations" />
          <Foot lists="Amazon Devices" />
          <Foot lists="Amazon Tours" />
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <Foot lists="Sell products on Amazon" />
          <Foot lists="Sell apps on Amazon" />
          <Foot lists="Become an Affiliate" />
          <Foot lists="Advertise Your Products" />
          <Foot lists="Self-Publish with Us" />
          <Foot lists="Host an Amazon Hub" />
          <Foot lists="See More Make Money with Us" />
        </ul>
        <ul>
          <h3>Amazon Payment Products</h3>
          <Foot lists="Amazon Rewards Visa Signature Cards" />
          <Foot lists="Amazon.com Store Card" />
          <Foot lists="Amazon Business Card" />
          <Foot lists="Amazon Business Line of Credit" />
          <Foot lists="Shop with Points" />
          <Foot lists="Credit Card Marketplace" />
          <Foot lists="Reload Your Balance" />
          <Foot lists="Amazon Currency Converter" />
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <Foot lists="Amazon and COVID-19" />
          <Foot lists="Your Account" />
          <Foot lists="Your Orders" />
          <Foot lists="Shipping Rates & Policies" />
          <Foot lists="Amazon Prime" />
          <Foot lists="Returns & Replacements" />
          <Foot lists="Manage Your Content and Devices" />
          <Foot lists="Amazon Assistant" />
          <Foot lists="Help" />
        </ul>
      </div>
      <Link to="/">
        <div className="footer__logo">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
            onClick={scrollToTop}
          />
        </div>
      </Link>

      {/* <div className="footer__credit">
        <h1>
          Built By:
          <a
            href="https://www.markosmelaku.com/"
            target="_blank"
            rel="noreferrer"
          >
            Markos Melaku
          </a>
        </h1>
      </div> */}
    </div>
  );
}

export default Footer;
