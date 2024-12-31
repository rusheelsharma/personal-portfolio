import "./App.css";
import Sidebar from "./sidebar";
import Portfolio from "./portfolio";
import Projects from "./projects";

function App() {
  return (
    <>
      <Sidebar />

      <div className="right-side-container">
        <Portfolio
          heading="About Me"
          description="I'm a Computer Science student at Northeastern University concentrating in Artificial Intelligence with a minor in mathematics."
        />

        <Portfolio heading="Experience" />

        <Portfolio heading="Projects" /> 

        <Projects />

        
      </div>
    </>
  );
}

export default App;
