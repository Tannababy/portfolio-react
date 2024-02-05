import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//page components
import Home from "./components/home";
import Header from "./components/header";
import ProjectGallery from "./components/projectGallery";
import Project from "./components/Project";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projectGallery" element={<ProjectGallery />}></Route>
        <Route path="/project/:key" element={<Project />}></Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
