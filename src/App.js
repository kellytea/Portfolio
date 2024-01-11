import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/intro";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;