import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import ProjectGallery from "./components/projectGallery";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        {/* Define a route that will have descendant routes */}
        <Route path="ProjectGallery/*" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
