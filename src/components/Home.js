import React from "react";
import '../style/Home.css';
// import profilePic from '../images/profile-pic.jpg'; // Add your profile picture here

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-text">
                    <h1>About Me</h1>
                    <p>Hi, I'm Ashish Bhosale, a passionate web developer with a keen interest in creating innovative web solutions. I specialize in frontend and backend development, and I'm committed to delivering high-quality, user-friendly applications.</p>
                    <h2>Key Skills:</h2>
                    <ul>
                        <li>Frontend Development: HTML, CSS, JavaScript, React</li>
                        <li>Backend Development: Node.js, Express, MySQL, MongoDB</li>
                        <li>Version Control: GitHub</li>
                        <li>APIs: RESTful APIs, JSON</li>
                    </ul>
                    <h2>Experience:</h2>
                    <p>With hands-on experience in building dynamic web applications, I have a strong background in both frontend and backend development. I've worked on various projects, including:</p>
                    <ul>
                        <li>Web application for task and event management</li>
                        <li>Photo gallery application with upload and delete functionalities</li>
                        <li>File handling application with features for file management</li>
                    </ul>
                </div>
                <div className="home-image">
                    {/* <img src={profilePic} alt="Ashish Bhosale" /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
