import React from "react";
import image7 from "../../images/image7.png";
// import image8 from "./image8.png";
// import image9 from "./image9.png";
// import image10 from "./image10.png";
// import cloud1 from "./cloud1.png";
// import cloud2 from "./cloud2.png";
// import { projects } from "../../projectData.js";

const styles = {
  headingStyle: {
    fontSize: "100px",
  },
};

export default function About() {
  // console.log(projects[0].projectName)
  return (
    <div className="aboutContent fadeIn">
      <div className="first-section">
        <img className="image-one" src={image7} alt="website owner" />
        {/* <img className="cloud1"src={cloud1}/> */}
        {/* <img className="cloud1" src={cloud1} alt="first cloud" /> */}
        {/* <img className="cloud2" src={cloud2} alt="second cloud" /> */}
        {/* <img className="cgotts1"src={cgotts1logo}/> */}

        <div>
          <h1 className="name">Cobi Gottschalk</h1>
          {/* <h1 className="name">{projects[0]}</h1> */}

          <h2 className="position">Software Developer</h2>
          {/* <p style={styles.paragraphStyle}>
        Currently a UCSD bootcamp student working towards becoming a fullstack
        developer. I have a B.A. in Anthropology as well as a MSc in Forensic
        Anthropology. My goals after completing this course is to find a job
        within the tech industry as a software engineer and then later
        transition into UX research in order to utilize my anthropological
        background. In addition to my passion for learning new skills, I have
        developed a passion for teaching new skills through my work experience
        in the United States K-12 public school system. While teaching can be
        very rewarding, it can also be mentally taxing, so classroom management
        has become an essential tool I rely on daily in order to maintain
        sanity. Below are portfolio's of work that I have accumulated over the
        past few years that share a brief look into my teaching experience,
        anthropological research done in college, and various web applications I
        have developed.
      </p> */}
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
