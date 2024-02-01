import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//page components
import Home from "./components/home";
import Header from "./components/header";
import ProjectGallery from "./components/projectGallery";
import Project from "./components/project";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectGallery/*" element={<ProjectGallery />} />
        <Route path="/projectGallery/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
