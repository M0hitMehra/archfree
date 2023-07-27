import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Career from "./components/Career/Career";

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-[5rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
