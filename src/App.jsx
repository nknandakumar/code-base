import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramPage from "./ProgramPage";
import ErrorPage from "./ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dynamic route for program IDs */}
        <Route path="/:id" element={<ProgramPage />} />
        <Route path="*"  element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
