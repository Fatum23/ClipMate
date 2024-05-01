import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import { HomePage } from "@pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="src/app/main.html" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
