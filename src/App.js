import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/" element={<NavBar />} />
      <Route path="/" element={<NavBar />} />
      </Routes>
    </>
  );
}

export default App;
