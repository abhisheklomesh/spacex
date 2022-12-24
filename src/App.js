import { Routes, Route } from "react-router-dom";
import History from "./Pages/History";
import Navbar from "./components/Navbar";
import Payloads from "./Pages/Payloads";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/payloads" element={<Payloads />} />
      </Routes>
    </div>
  );
}

export default App;
