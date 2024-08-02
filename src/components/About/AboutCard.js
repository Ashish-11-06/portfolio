import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Bhosale </span>
            from <span className="purple"> Pune, India. </span>
            I have completed MCA (Master Of Computer Application) in SPPU.
            <br />
            <br />
            <h2>Key Skills:</h2>
                    <ul>
                        <li>Frontend Development: HTML, CSS, JavaScript, Bootstrap, React </li>
                        <li>Backend Development: NodeJs,  Express, Java, Spring Boot, Hibernate, RESTful APIs</li>
                        <li>Database: MySQL, MongoDB</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>APIs: RESTful APIs, JSON</li>
                        <li>Tools and Technologies: Axios, JSON-server, Multer, Maven, Lombok, Spring Security, Thymeleaf, Eclipse, VS Code, etc.</li>
                      
                    </ul>
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Flute and Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Ballpen sketching and Pencil sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
