import React, { useEffect } from "react";
import "./Projects.css";
import img1 from "../../images/educite.png";
import img2 from "../../images/onuronon.png";
import img3 from "../../images/shop1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatelliteDish, faList, faArrowAltCircleRight  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube,faGithub } from '@fortawesome/free-brands-svg-icons'



const Projects = () => {
useEffect(()=>{
  
  (function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();
}, [])
  return (
    <div className="our-story">
 
      <section id="projects" className="timeline">
      <h1>My Projects</h1>
        <ul>
          <li>
            <div className="event-box-grid">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <time>Learn Pro</time>
                <div>
                  <span><FontAwesomeIcon icon={faArrowAltCircleRight} /> It's a full stack educational website</span>  <br/>
                  <span><FontAwesomeIcon icon={faArrowAltCircleRight} />Here you will find a admin panel.</span> <br/>
                  <span><FontAwesomeIcon icon={faArrowAltCircleRight} />It's connected through firsbase and mongodb.</span><br/>
                  <span><a className="live-site-link" href="https://jolly-bose-b38231.netlify.app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faSatelliteDish} /></a> <a href="https://github.com/MehrajRahman/Onuronon.github.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="live-site-link" icon={faGithub} /></a></span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="event-box-grid">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <time>Onuronon</time>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} />It's a website, created for an organization. <br/><FontAwesomeIcon icon={faArrowAltCircleRight} /> HTML, CSS and simple JS has been used.</span><br/>
                <span><a className="live-site-link" href="https://mehrajrahman.github.io/Onuronon.github.io/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSatelliteDish} /> </a><FontAwesomeIcon className="live-site-link" icon={faGithub} /></span>
              </div>
            </div>
          </li>
          <li>
            <div className="event-box-grid">
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <time>Buy Now</time>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} />It's a simple e-commerce website</span><br/>
                <span><FontAwesomeIcon icon={faArrowAltCircleRight} />Here you will find sme simple full stack template</span><br/>
                <span><a className="live-site-link" href="https://admiring-perlman-a66920.netlify.app" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSatelliteDish} /> </a><FontAwesomeIcon className="live-site-link" icon={faGithub} /></span>
              </div>
            </div>
          </li>
          
        </ul>
      </section>
    </div>
  );
};

export default Projects;
