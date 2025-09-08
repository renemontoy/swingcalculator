import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { Outlet } from 'react-router-dom';
import IronSwing from "./Iron";
import DriverSwing from "./Driver";
import UltraliteSwing from "./Ultralite";
import SecretSwing from "./Secretweapon";
import FairwaySwing from "./Fairway";
import HybridSwing from "./Hybrid";
import NavBar from "./navigation";
import IronSwingG8 from "./IronG8";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirección */}
        <Route path="/" element={<Navigate to="/iron" replace />} />

        {/* Ruta padre con Layout */}
        <Route path="/" element={<NavBar />}>
          <Route path="iron" element={<IronSwing />} />
          <Route path="driver" element={<DriverSwing />} />
          <Route path="ultralite" element={<UltraliteSwing />} />
          <Route path="secretweapon" element={<SecretSwing />} />
          <Route path="fairway" element={<FairwaySwing />} />
          <Route path="hybrid" element={<HybridSwing />} />
          <Route path="1TES8T7IN68" element={<IronSwingG8 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;