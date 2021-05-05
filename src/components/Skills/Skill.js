import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import './Skill.css'

const Skill = () => {
  return (
    <div className="p-5">
      <h1>My Skills..</h1>
      <Row>
        <Col>
            <div>
                <ul className="skill-container">
                    <h2>My Coding Zone</h2>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>HTML</h4>
                            <p>99%</p>
                        </div>
                        <ProgressBar now={99} />
                    </li>
                    
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>CSS</h4>
                            <p>90%</p>
                        </div>
                        <ProgressBar now={90} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>JAVASCRIPT</h4>
                            <p>80%</p>
                        </div>
                        <ProgressBar now={80} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>REACT</h4>
                            <p>90%</p>
                        </div>
                        <ProgressBar now={90} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>BOOTSTRAP</h4>
                            <p>80%</p>
                        </div>
                        <ProgressBar now={80} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>MATERIAL UI</h4>
                            <p>95%</p>
                        </div>
                        <ProgressBar now={95} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>MONGODB</h4>
                            <p>85%</p>
                        </div>
                        <ProgressBar now={85} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>NODE JS</h4>
                            <p>80%</p>
                        </div>
                        <ProgressBar now={80} />
                    </li>
                </ul>
            </div>
        
        </Col>
        <Col>
            <div>
            <ul className="skill-container2">
                    <h2>Familiar With</h2>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>Next.JS</h4>
                            <p>70%</p>
                        </div>
                        <ProgressBar now={70} />
                    </li>
                    
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>TAILWAND CSS</h4>
                            <p>70%</p>
                        </div>
                        <ProgressBar now={70} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>VUE JS</h4>
                            <p>60%</p>
                        </div>
                        <ProgressBar now={60} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>REACT NATIVE</h4>
                            <p>65%</p>
                        </div>
                        <ProgressBar now={65} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>SASS</h4>
                            <p>75%</p>
                        </div>
                        <ProgressBar now={75} />
                    </li>
                    <li className="skill-list">
                        <div className="d-flex justify-content-between">
                            <h4>ANGULAR JS</h4>
                            <p>55%</p>
                        </div>
                        <ProgressBar now={55} />
                    </li>
                </ul>
            </div>
        </Col>
        <Col>
        
        <div>
            <ul className="skill-container">
                    <h2>Tools I Use</h2>
                    <li className="skill-list">
                       <h3>VS CODE</h3>
                    </li>
                    
                    <li className="skill-list">
                    <h3>GITHUB</h3>
                    </li>
                    <li className="skill-list">
                    <h3>ATOM</h3>
                    </li>
                    <li className="skill-list">
                    <h3>FIGMA</h3>
                    </li>
                    <li className="skill-list">
                    <h3>GIT LENS</h3>
                    </li>
                    <li className="skill-list">
                    <h3>Chrome Developer Tools (DevTools)</h3>
                    </li>
                    <li className="skill-list">
                    <h3>Code pen</h3>
                    </li>
                    <li className="skill-list">
                    <h3>Page Speed Modules</h3>
                    </li>
                </ul>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skill;
