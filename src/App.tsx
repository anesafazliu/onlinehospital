import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Hospitals } from "./components/pages/Hospitals";
import { Doctors } from "./components/pages/Doctors";
import LogIn from "./components/authPages/LogIn";
import ResponsiveAppBar from "./components/layout/ResponsiveNavBar/ResponsiveNavBar";
import { RequireAuth } from "./auth/RequireAuth";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/login" element={<LogIn />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/hospitals"
          element={
            <RequireAuth>
              <Hospitals />
            </RequireAuth>
          }
        />
        <Route
          path="/doctors"
          element={
            <RequireAuth>
              <Doctors />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
