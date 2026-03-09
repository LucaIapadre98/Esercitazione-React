import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/details";
import Homepage from "../pages/homepage";
import Buy from "../pages/buy";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

