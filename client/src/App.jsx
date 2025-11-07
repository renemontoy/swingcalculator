import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import IronSwing from "./Iron";
import DriverSwing from "./Driver";
import UltraliteSwing from "./Ultralite";
import SecretSwing from "./Secretweapon";
import FairwaySwing from "./Fairway";
import HybridSwing from "./Hybrid";
import NavBar from "./navigation";
import IronSwingG8 from "./IronG8";
import DriverSwingG8 from "./G8Driver";
import MaxLiteG8 from "./G8MaxLite";
import FairwaySwingG8 from "./G8Fairway";
import HybridSwingG8 from "./G8Hybrid";
import PutterLength from "./SwingLenght/LenghtPutter";
import NavBarLength from "./navlength";
import DriverLength from "./SwingLenght/LenghtDriver";
import SecretWeaponLength from "./SwingLenght/LengthSecretWeapon";
import FairwayLength from "./SwingLenght/LengthFairway";
import HybridLength from "./SwingLenght/LenghtHybrid";
import IronLength from "./SwingLenght/LenghtIrons";

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
          <Route path="gen8/iron" element={<IronSwingG8 />} />
          <Route path="lightning/driver" element={<DriverSwingG8 />} />
          <Route path="lightning/maxlite" element={<MaxLiteG8 />} />
          <Route path="lightning/fairway" element={<FairwaySwingG8 />} />
          <Route path="lightning/hybrid" element={<HybridSwingG8 />} />
          </Route>
          <Route path="length" element={<NavBarLength />}>
          <Route index element={<Navigate to="putter" replace />} />
          <Route path="putter" element={<PutterLength />} />
          <Route path="driver" element={<DriverLength />} />
          <Route path="secretweapon" element={<SecretWeaponLength />} />
          <Route path="fairway" element={<FairwayLength />} />
          <Route path="hybrid" element={<HybridLength />} />
          <Route path="iron" element={<IronLength />} />

           </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;