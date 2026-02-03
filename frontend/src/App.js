import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TenXDesigningPage from "./pages/TenXDesigningPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/10x-designing" element={<TenXDesigningPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
