import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="row footer d-flex align-items-center justify-content-around p-5">
      <div className="col-md-4 ">
        <h1>
          Mehraj Rahman <br />
        </h1>
        <h3>An Independent Web Developer</h3>
        <h4>M.Rahman</h4>
      </div>
      <div className="col-md-2">
        <h2>Site Map</h2>
        <ul>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Submit Listing</a>
          </li>
        </ul>
      </div>

      <div className="col-md-4">
        <h2>About me</h2>
        <p style={{ paddingLeft: "20px", color: "white" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          possimus porro excepturi. Magni quam necessitatibus quibusdam tempora,
          deleniti a ullam?
        </p>
        <div className="d-flex justify-content-around">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
          <a href="https://github.com/MehrajRahman" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/mahamudurrahman.mehraj" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
