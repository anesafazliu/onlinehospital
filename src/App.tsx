import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Hospitals } from "./components/pages/Hospitals";
import { Doctors } from "./components/pages/Doctors";
import { LogIn } from "./auth/LogIn";
import ResponsiveAppBar from "./components/ResponsiveNavBar/ResponsiveNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
