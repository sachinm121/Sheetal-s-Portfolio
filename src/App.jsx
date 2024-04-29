import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Articles from "./components/Articles/Articles";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/coding" element={<Articles />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
