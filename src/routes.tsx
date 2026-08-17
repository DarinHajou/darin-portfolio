import { Routes, Route } from "react-router"
import ResetWithContext from "./projects/ResetWithContext/ResetWithContext";
import MapOfPi from "./projects/MapOfPi/MapOfPi";
import Whispr from "./projects/Whispr/Whispr";
import Home from "./pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/MapOfPi" element={<MapOfPi />} />
      <Route path="/projects/ResetWithContext" element={<ResetWithContext />} />;
      <Route path="/projects/Whispr" element={<Whispr />} />
    </Routes>
  )
}