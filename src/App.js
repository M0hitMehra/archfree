import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<NavBar />} />
      </Routes>
    </>
  );
}

export default App;
