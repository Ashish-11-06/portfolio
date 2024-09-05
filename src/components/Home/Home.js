import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  // Define animation variants for reusable animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // const rotateIn = {
  //   hidden: { opacity: 0, rotate: -15 },
  //   visible: { opacity: 1, rotate: 0 },
  // };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger the children with a delay
      },
    },
  };

  // Set a delay of 0.9 seconds to match the preloader duration
  const initialDelay = 0.9;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeInOut", delay: initialDelay }}
      className="home-section"
      id="home"
    >
      <Container fluid className="home-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                className="heading"
                style={{ paddingBottom: 15 }}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: initialDelay + 0.2 }}
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name"
                variants={slideIn}
                transition={{ duration: 0.8, delay: initialDelay + 0.4 }}
              >
                I'M
                <strong className="main-name"> Ashish Bhosale</strong>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                variants={scaleIn}
                transition={{ duration: 1, delay: initialDelay + 0.6 }}
              >
                <Type />
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                variants={slideIn}
                transition={{ duration: 1, delay: initialDelay + 0.8 }}
              />
            </Col>
          </Row>
        </motion.div>
      </Container>
      <Home2 />
    </motion.section>
  );
}

export default Home;
