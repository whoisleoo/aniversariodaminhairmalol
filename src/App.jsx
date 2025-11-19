import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Invite from "./Invite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
