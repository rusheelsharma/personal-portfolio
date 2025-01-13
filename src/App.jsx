import "./App.css";
import Sidebar from "./sidebar";
import Portfolio from "./portfolio";
import Projects from "./projects";
import Experience from "./experience";

function App() {
  return (
    <>
      <Sidebar />

      <div className="right-side-container">
      <Portfolio
  heading="About Me"
  description={`I'm a passionate Computer Science student at Northeastern University, specializing in Artificial Intelligence with a Mathematics minor. 
  I excel in problem-solving, software development, and creating user-centric applications. My coursework, including Algorithms & Data and Object-Oriented Design, 
  has sharpened my analytical skills, while my hands-on experience as a TA and developer has honed my ability to work in teams and deliver results. 
  I am adept at Java, JavaScript, C, Swift, and React, and have professional experience in full-stack development, UI/UX design, and SEO optimization. 
  Beyond coding, I enjoy tackling real-world challenges and mentoring peers in their learning journey.
  
  Outside of academics, I’m a guitarist in NU Aaroh, an Indian music club at Northeastern University. I love playing the electric guitar and exploring rock and metal music, 
  drawing inspiration from bands like Metallica and Green Day. Music has taught me creativity, discipline, and the importance of collaboration.`}
/>


        <Portfolio heading="Experience" />

        <Experience />

        <Portfolio heading="Projects" /> 

        <Projects />

        
      </div>
    </>
  );
}

export default App;
