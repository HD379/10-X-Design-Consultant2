import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
