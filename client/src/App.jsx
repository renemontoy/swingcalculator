import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import IronSwing from "./Iron";
import DriverSwing from "./Driver";
import UltraliteSwing from "./Ultralite";
import SecretSwing from "./Secretweapon";
import FairwaySwing from "./Fairway";
import HybridSwing from "./Hybrid";
import NavBar from "./navigation";
import NavBarGen8 from "./navG8";
import IronSwingG8 from "./IronG8";
import DriverSwingG8 from "./G8Driver";
import MaxLiteG8 from "./G8MaxLite";
import FairwaySwingG8 from "./G8Fairway";
import HybridSwingG8 from "./G8Hybrid";

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
        </Route>
          <Route path="gen8/" element={<NavBarGen8 />}>
          <Route path="iron" element={<IronSwingG8 />} />
          <Route path="driver" element={<DriverSwingG8 />} />
          <Route path="maxlite" element={<MaxLiteG8 />} />
          <Route path="fairway" element={<FairwaySwingG8 />} />
          <Route path="hybrid" element={<HybridSwingG8 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;