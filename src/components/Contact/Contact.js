import React from "react";
import { Col, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact p-5">
      <h1>Contact With Me</h1>
      {/* <Form>
        <Form.Group >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Your Name" />
        </Form.Group>

        <Form.Group >
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
       <input type="submit" value="Submit"/>
      </Form> */}
      <Form>
        <Form.Row>
          <Col>
          <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Your Name" />
        </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
          <Form.Group >
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
          </Col>
          
        </Form.Row>
        
       <input type="submit" value="Submit"/>
      </Form>
    </div>
  );
};

export default Contact;
