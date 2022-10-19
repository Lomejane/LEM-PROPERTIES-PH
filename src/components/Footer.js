import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
}
from "react-icons/fa";

function Footer() {
  return (
    // <div className="style.footer">
    //   <div className="socialMedia">
    //     <p>BsInstagram,Instagram | Twitter | Facebook | LinkedIn </p>
    //   </div>
    //   <p> &copy; 2022 LEMProperties.ph</p>
    // </div>
    <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <ul className="nav flex-column">
          <h5>Explore</h5>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Properties</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sign Up</a></li>
        </ul>
      </div>
      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Metro Manila</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Luzon</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Visayas</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mindanao</a></li>
        </ul>
      </div>
      <div className="col-2">
        <h5>Follow Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"> <FaFacebookF size="2rem" /> Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FaYoutube size="2rem" /> Youtube</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><FaInstagram size="2rem" /> Instagram</a></li>
        </ul>
      </div>
      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>We'll provide updates on recent property listings, special promotions,  sales and more.</p>
          <div className="d-flex w-100">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" /> <br></br>
            <button className="btn btn-light" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2022 Lem Properties.ph, All rights reserved.</p>
    </div>
  </footer>
</div>


      
  );
}

export default Footer;