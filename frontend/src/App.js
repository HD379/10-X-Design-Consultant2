import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
