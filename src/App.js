import { Routes, Route } from "react-router-dom";
import History from "./Pages/Payloads";
import Navbar from "./components/Navbar";
import Payloads from "./Pages/Payloads";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/payloads" element={<Payloads />} />
      </Routes>
    </>
  );
}

export default App;
