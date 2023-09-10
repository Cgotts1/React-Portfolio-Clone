import React from "react";
import image7 from "../../images/image7.png";
// import { projects } from "../../projectData.js";

const styles = {
  headingStyle: {
    fontSize: "100px",
  },
};

export default function About() {
  return (
    <div className="aboutContent fadeIn">
      <div className="first-section">
        <img className="image-one" src={image7} alt="website owner" />
       
      

        <div>
          <h1 className="name">Cobi Gottschalk</h1>

          <h2 className="position">Software Developer</h2>
       
        </div>
      </div>

      <div className="second-section">
        <div className="aboutme-container">
          <h1>About Me</h1>
        </div>

        <div className="p-container">
          {/* <p className="introduction">Full Stack <br></br>Developer</p> */}
          <p className="p-content">
            With a Master of Science degree in forensic anthropology from
            Liverpool John Moores University and a Bachelor of Arts degree in
            anthropology from California State University, Northridge, my
            educational background in anthropology is well-rounded. I have
            expertise in both qualitative and quantitative research methods.
            Furthermore, I have expanded my skill set through a comprehensive
            full stack coding bootcamp at UCSD, where I gained practical
            experience and sharpened my abilities in software development and
            web applications.<br></br>
            <br></br>
            During my time at the bootcamp, I learned how to build responsive
            and user-friendly web applications, as well as how to collaborate
            with other developers using Git version control. Drawing from my
            previous experience as a high school art teacher, I also applied my
            insights into user experience (UX) and user interface (UI) design
            principles to develop web applications with intuitive and visually
            appealing interfaces, ensuring a seamless experience for end-users.
            I gained hands-on experience with various programming languages such
            as HTML, CSS, and JavaScript, and became proficient in using the
            MERN (MongoDB, Express, React, Node.js) stack, which is widely used
            in modern web development. Overall, my combination of skills in
            anthropology and software development make me a well-rounded
            and versatile candidate for a variety of roles in both
            fields.
          </p>

          {/* <img className="csun-logo"src={image8} alt="of csun logo"/>
      <img className="ljmu-logo"src={image9} alt="ljmu logo"/>
      <img className="ucsd-logo"src={image10} alt="ucsd logo"/> */}
        </div>
      </div>
    </div>
  );
}
