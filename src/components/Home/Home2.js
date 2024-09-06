import React, { useRef, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [loaderComplete] = useState(true);

  // Refs to track the components in view
  const aboutRef = useRef(null);
  const avatarRef = useRef(null);
  const socialRef = useRef(null);

  // Hooks to check if elements are in view
  const isAboutInView = useInView(aboutRef, { once: false, threshold: 0.5 });
  const isAvatarInView = useInView(avatarRef, { once: false, threshold: 0.5 });
  const isSocialInView = useInView(socialRef, { once: false, threshold: 0.5 });

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0 },
  };

  const bounceIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.h1
              ref={aboutRef}
              style={{ fontSize: "2.6em" }}
              initial="hidden"
              animate={loaderComplete && isAboutInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </motion.h1>
            <motion.p
              className="home-about-body"
              initial="hidden"
              animate={loaderComplete && isAboutInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
              I am a passionate developer with a strong interest in building
              innovative web applications.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <strong className="purple">
                  {" "}
                  JavaScript, Node.js, and Express.{" "}
                </strong>
              </i>
              <br />
              <br />
              My field of interest includes creating new &nbsp;
              <i>
                <strong className="purple">
                  Web Technologies and Products.{" "}
                </strong>
              </i>
              <br />
              <br />
              I also apply my passion for developing products using{" "}
              <strong className="purple">Node.js</strong> and
              <i>
                <strong className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks
                </strong>
              </i>
              &nbsp; such as
              <i>
                <strong className="purple"> React.js</strong>
              </i>
              .
            </motion.p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <motion.img
                ref={avatarRef}
                src={myImg}
                className="img-fluid"
                alt="Ashish Bhosale's avatar"
                initial="hidden"
                animate={loaderComplete && isAvatarInView ? "visible" : "hidden"}
                variants={rotateIn}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.h1
              ref={socialRef}
              initial="hidden"
              animate={loaderComplete && isSocialInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            >
              FIND ME ON
            </motion.h1>
            <motion.p
              initial="hidden"
              animate={loaderComplete && isSocialInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
            >
              Feel free to <span className="purple">connect </span>with me
            </motion.p>
            <motion.ul
              className="home-about-social-links"
              initial="hidden"
              animate={loaderComplete && isSocialInView ? "visible" : "hidden"}
              variants={bounceIn}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
            >
              <motion.li className="social-icons">
                <a
                  href="https://github.com/Ashish-11-06/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </motion.li>
              <motion.li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashishbhosale2748/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </motion.li>
              <motion.li className="social-icons">
                <a
                  href="https://www.instagram.com/its__ashu.11/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </motion.li>
            </motion.ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
