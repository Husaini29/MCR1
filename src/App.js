import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
