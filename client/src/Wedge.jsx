import { useMemo, useState } from "react";

// 65 shafts, three independent source values per shaft.
// These values come directly from the user's wedge matrix.
const wedgeShaftMatrix = {
  "Accra iSeries 50i - Parallel": { "50/52": "C9.4", "54/56": "D0.9", "58/60": "D2.4" },
  "Accra iSeries 60i - Parallel": { "50/52": "C9.5", "54/56": "D1", "58/60": "D2.5" },
  "Accra iSeries 70i - Parallel": { "50/52": "D0.5", "54/56": "D2", "58/60": "D3.5" },
  "Accra iSeries 80i - Parallel": { "50/52": "D0.2", "54/56": "D1.7", "58/60": "D3.2" },
  "Accra iSteel Green 105 R - Parallel": { "50/52": "D2.5", "54/56": "D4", "58/60": "D5.5" },
  "Accra iSteel Green 115 S - Parallel": { "50/52": "D3.2", "54/56": "D4.7", "58/60": "D6.2" },
  "Accra iSteel Green 125 X": { "50/52": "D5.1", "54/56": "D6.6", "58/60": "D8.1" },
  "Aerotech SteelFiber Private Reserve 110S - Parallel": { "50/52": "D1.7", "54/56": "D3.2", "58/60": "D4.7" },
  "Aerotech SteelFiber Private Reserve 60A - Parallel": { "50/52": "D0.4", "54/56": "D1.9", "58/60": "D3.4" },
  "Aerotech SteelFiber Private Reserve 70R - Parallel": { "50/52": "D1.3", "54/56": "D2.8", "58/60": "D4.3" },
  "Aerotech SteelFiber Private Reserve 95R - Parallel": { "50/52": "D1.3", "54/56": "D2.8", "58/60": "D4.3" },
  "Aerotech SteelFiber Private Reserve 95S - Parallel": { "50/52": "D1.7", "54/56": "D3.2", "58/60": "D4.7" },
  "Dynamic Gold 95 R - Parallel": { "50/52": "D2.2", "54/56": "D3.7", "58/60": "D5.2" },
  "Dynamic Gold 95 S - Parallel": { "50/52": "D3.3", "54/56": "D4.8", "58/60": "D6.3" },
  "Elevate MP 95g R- Parallel": { "50/52": "D2.5", "54/56": "D4", "58/60": "D5.5" },
  "Elevate MP 95g S- Parallel": { "50/52": "D3.6", "54/56": "D5.1", "58/60": "D6.6" },
  "KBS Ctaper 120 S": { "50/52": "D4.4", "54/56": "D5.9", "58/60": "D7.4" },
  "KBS Ctaper 130 X": { "50/52": "D5.1", "54/56": "D6.6", "58/60": "D8.1" },
  "KBS Ctaper Lite 110 S": { "50/52": "D4", "54/56": "D5.5", "58/60": "D7" },
  "KBS Max Graphite 45 L - Parallel": { "50/52": "C9.5", "54/56": "D1.0", "58/60": "D2.5" },
  "KBS Max Graphite 55 A - Parallel": { "50/52": "D0", "54/56": "D1.5", "58/60": "D3" },
  "KBS Max Graphite 65 R - Parallel": { "50/52": "D0.7", "54/56": "D2.2", "58/60": "D3.7" },
  "KBS S Taper Lite R - Parallel": { "50/52": "D1.1", "54/56": "D2.6", "58/60": "D4.1" },
  "KBS STaperLite 100 S": { "50/52": "D2.5", "54/56": "D4", "58/60": "D5.5" },
  "KBS TGIGraphite 70 R - Parallel": { "50/52": "D1.5", "54/56": "D3.0", "58/60": "D4.5" },
  "KBS TGIGraphite 80 S - Parallel": { "50/52": "D2.6", "54/56": "D4.1", "58/60": "D5.6" },
  "KBS Tour 110 R": { "50/52": "D2.7", "54/56": "D4.2", "58/60": "D5.7" },
  "KBS Tour 120 S": { "50/52": "D2.4", "54/56": "D3.9", "58/60": "D5.4" },
  "KBS Tour 130 X": { "50/52": "D3.9", "54/56": "D3.9", "58/60": "D6.9" },
  "Mitsubishi MMT 50 L - Parallel": { "50/52": "C9.6", "54/56": "D1.1", "58/60": "D2.6" },
  "Mitsubishi MMT 60 A - Parallel": { "50/52": "D0.4", "54/56": "D1.9", "58/60": "D3.4" },
  "Mitsubishi MMT 70 R - Parallel": { "50/52": "D0.8", "54/56": "D2.3", "58/60": "D3.8" },
  "Mitsubishi MMT 80 S - Parallel": { "50/52": "D1.7", "54/56": "D3.2", "58/60": "D4.7" },
  "Mitsubishi MMT Taper 105 S": { "50/52": "D4.8", "54/56": "D6.3", "58/60": "D7.8" },
  "Mitsubishi MMT Taper 125 X": { "50/52": "D4.7", "54/56": "D6.2", "58/60": "D7.7" },
  "Nippon Modus Pro 105 R": { "50/52": "D3.1", "54/56": "D4.6", "58/60": "D6.1" },
  "Nippon Modus Pro 105 S": { "50/52": "D3.1", "54/56": "D4.6", "58/60": "D6.1" },
  "Nippon Modus Pro 105 X": { "50/52": "D3.5", "54/56": "D5", "58/60": "D6.5" },
  "Nippon Modus Pro 120 S": { "50/52": "D4.5", "54/56": "D6", "58/60": "D7.5" },
  "Nippon Modus Pro 120 X": { "50/52": "D4.5", "54/56": "D6", "58/60": "D7.5" },
  "Nippon NSPro 950GH R": { "50/52": "D2.4", "54/56": "D3.9", "58/60": "D5.4" },
  "Nippon NSPro 950GH S": { "50/52": "D2.7", "54/56": "D4.2", "58/60": "D5.7" },
  "Project X Cypher 2.0 40i 4.0 - Parallel": { "50/52": "C8.6", "54/56": "D0.1", "58/60": "D1.6" },
  "Project X Cypher 2.0 50i 5.0 - Parallel": { "50/52": "C9.5", "54/56": "D1.0", "58/60": "D2.5" },
  "Project X Cypher 2.0 60i 5.5 - Parallel": { "50/52": "D0.3", "54/56": "D1.8", "58/60": "D3.3" },
  "Project X Denali Silver 105i 6.0 - Parallel": { "50/52": "D1.8", "54/56": "D3.3", "58/60": "D4.8" },
  "Project X Denali Silver 50i 4.0 - Parallel": { "50/52": "C8.6", "54/56": "D0.1", "58/60": "D1.6" },
  "Project X Denali Silver 60i 5.0 - Parallel": { "50/52": "C9.6", "54/56": "D1.1", "58/60": "D2.6" },
  "Project X Denali Silver 70i 5.5 - Parallel": { "50/52": "D0.4", "54/56": "D1.9", "58/60": "D3.4" },
  "Project X Denali Silver 80i 6.0 - Parallel": { "50/52": "D0.2", "54/56": "D1.7", "58/60": "D3.2" },
  "ProjectX PX 6.5 X": { "50/52": "D5.4", "54/56": "D6.9", "58/60": "D8.4" },
  "ProjectX PXLZ 6.0 S+": { "50/52": "D5.1", "54/56": "D6.6", "58/60": "D8.1" },
  "ProjectX PXLZ 6.5 X": { "50/52": "D4.5", "54/56": "D6", "58/60": "D7.5" },
  "True Temper Dynamic Gold 105 R": { "50/52": "D3.5", "54/56": "D5", "58/60": "D6.5" },
  "True Temper Dynamic Gold 105 S": { "50/52": "D4.5", "54/56": "D6", "58/60": "D7.5" },
  "True Temper Dynamic Gold 120 S": { "50/52": "D4.7", "54/56": "D6.2", "58/60": "D7.7" },
  "True Temper Dynamic Gold 120 X": { "50/52": "D4.2", "54/56": "D5.7", "58/60": "D7.2" },
  "True Temper Dynamic Gold MID 115 R - Parallel": { "50/52": "D3.6", "54/56": "D5.1", "58/60": "D6.6" },
  "True Temper Dynamic Gold MID 115 S - Parallel": { "50/52": "D3.7", "54/56": "D5.2", "58/60": "D6.7" },
  "True Temper Dynamic Gold MID 115 X - Parallel": { "50/52": "D3.8", "54/56": "D5.3", "58/60": "D6.8" },
  "True Temper Dynamic Gold X100 X": { "50/52": "D4.8", "54/56": "D6.3", "58/60": "D7.8" },
  "UST Recoil 55 Dart F1- L - Parallel": { "50/52": "C8.5", "54/56": "D0.0", "58/60": "D1.5" },
  "UST Recoil 65 Dart F2- A - Parallel": { "50/52": "C9.2", "54/56": "D0.7", "58/60": "D2.2" },
  "UST Recoil 75 Dart F3- R - Parallel": { "50/52": "D0.8", "54/56": "D2.3", "58/60": "D3.8" },
  "UST Recoil 75 Dart F4- S - Parallel": { "50/52": "D1.5", "54/56": "D3", "58/60": "D4.5" },
};

const lengthList = {
  "Standard": 0,
  "+2\"": 12,
  "+1 3/4\"": 10.5,
  "+1 1/2\"": 9,
  "+1 1/4\"": 7.5,
  "+1\"": 6,
  "+3/4\"": 4.5,
  "+1/2\"": 3,
  "+1/4\"": 1.5,
  "-1/4\"": -1.5,
  "-1/2\"": -3,
  "-3/4\"": -4.5,
  "-1\"": -6,
  "-1 1/4\"": -7.5,
  "-1 1/2\"": -9,
  "-1 3/4\"": -10.5,
  "-2\"": -12
};

const gripList = {
  "PXG Z5 Undersize": 1.3,
  "PXG Z5 Standard": -0.6,
  "PXG Z5 Midsize": -2.7,
  "PXG Z5 Oversize": -5.1,
  "PXG True Temper Icon Standard (Default)": 0,
  "PXG True Temper Icon Midsize": -2.4,
  "PXG True Temper Icon Oversized": -4.4,
  "PXG True Temper Icon Undersized": 1.3,
  "Golf Pride Tour Velvet 360 Undersize": 1.3,
  "Golf Pride Tour Velvet 360 Standard": -0.4,
  "Golf Pride Tour Velvet 360 Midsize": -1.6,
  "Golf Pride Tour Velvet 360 Oversize": -3.3,
  "Golf Pride Tour Velvet Womens": 0.2,
  "Golf Pride Tour Velvet Standard": 0,
  "Golf Pride Tour Velvet Midsize": -1.1,
  "Golf Pride Tour Wrap Black Standard": 0,
  "Golf Pride Tour Wrap Black Midsize": -1.6,
  "Golf Pride Tour Wrap White Standard": -0.9,
  "Golf Pride Tour Wrap White Midsize": -3.1,
  "Golf Pride MCC +4 Standard": -0.9,
  "Golf Pride MCC +4 Midsize": -4,
  "Golf Pride MCC +4 Align Standard": -0.7,
  "Golf Pride Multi-Compound White Standard": 0.2,
  "Golf Pride Multi-Compound White Midsize": -2.2,
  "Golf Pride Z-Cord Standard": 0,
  "Golf Pride Z-Cord Midsize": -1.1,
  "Golf Pride CP2 Pro Standard": 0,
  "Golf Pride CP2 Pro Midsize": -3.1,
  "Golf Pride CP2 Wrap Undersize": 1.1,
  "Golf Pride CP2 Wrap Standard": 0,
  "Golf Pride CP2 Wrap Midsize": -2.7,
  "Superstroke REVL Comfort Standard": -0.9,
  "Superstroke REVL Comfort Midsize": -3.1,
  "Superstroke REVL Comfort Jumbo": -6.9,
  "Superstroke Crossline 2.0 Standard": 0.1,
  "Superstroke Crossline 2.0 Midsize": -3.1,
  "Superstroke Crossline 2.0 Jumbo": -6.9,
  "Superstroke REVL Element 4X Standard": -0.6,
  "Superstroke REVL Element 4X Midsize": -3.4,
  "Winn Excel Wrap Oversize": 0.7,
  "Winn Dri-Tac Ladies": 3.3,
  "Winn Dri-Tac Standard": 0.4,
  "Winn Dri-Tac Midsize": 0.4,
  "Winn Dri-Tac Oversize": 0.4,
  "Winn Wrap Standard": 0,
  "Winn Wrap Midsize": 0,
  "Winn Wrap Oversize": 0
};

const wrapList = {
  "Standard": 0,
  "+1": -0.3,
  "+2": -0.7,
  "+3": -1
};

// Allowed adjustments depend on the selected head model.
// Keep these values aligned with the current WedgeSwing implementation.
const headList = {
  "Sugar Daddy III": 0,
  "Stick Ems": 0,
};

const adjustmentOptions = {
  "Sugar Daddy III": {
    "Standard": 0,
    "+1": 1,
    "+2": 2,
    "+3": 3,
    "-1": -1,
    "-2": -2,
  },
  "Stick Ems": {
    "Standard": 0,
    "+1": 1,
    "+2": 2,
    "-1": -1,
    "-2": -2,
  },
};

const wedgeGroups = [
  { key: "50/52", label: '50° / 52° ', baseLength: '35.5"', headWeight: "292 g" },
  { key: "54/56", label: '54° / 56° ', baseLength: '35.25"', headWeight: "299 g" },
  { key: "58/60", label: '58° / 60° ', baseLength: '35"', headWeight: "306 g" },
];

// Exact conversion for the original SW scale: A0 = 1.0, B0 = 11.0,
// C0 = 21.0, D0 = 31.0, etc. Uses tenths to avoid floating point lookups.
function swingToTenths(value) {
  const match = /^([A-F])(\d)(?:\.(\d))?$/.exec(value);
  if (!match) throw new Error(`Invalid swing weight: ${value}`);
  const letter = match[1].charCodeAt(0) - 65;
  return letter * 100 + (Number(match[2]) + 1) * 10 + Number(match[3] ?? 0);
}

function tenthsToSwing(value) {
  if (value < 10 || value > 609) return "Out of range";
  const letterIndex = Math.floor((value - 10) / 100);
  const remainder = value - 10 - letterIndex * 100;
  const digit = Math.floor(remainder / 10);
  const decimal = remainder % 10;
  return `${String.fromCharCode(65 + letterIndex)}${digit}${decimal ? `.${decimal}` : ""}`;
}

function formatAdjustment(value) {
  const normalized = Math.round(value * 10) / 10;
  return `${normalized > 0 ? "+" : ""}${normalized}`;
}

export default function WedgeSwingweightCalculator() {
  const [shaft, setShaft] = useState("Accra iSeries 50i - Parallel");
  const [head, setHead] = useState("Sugar Daddy III");
  const [length, setLength] = useState("Standard");
  const [grip, setGrip] = useState("PXG True Temper Icon Standard (Default)");
  const [wrap, setWrap] = useState("Standard");
  const [adjustment, setAdjustment] = useState("Standard");

  const currentAdjustmentOptions = adjustmentOptions[head] ?? { Standard: 0 };

  const handleHeadChange = (event) => {
    const newHead = event.target.value;
    setHead(newHead);
    // Consulta las opciones del modelo NUEVO, no el estado anterior.
    const firstOption = Object.keys(adjustmentOptions[newHead] ?? { Standard: 0 })[0];
    setAdjustment(firstOption);
  };

  const results = useMemo(() => {
    const allowedAdjustments = adjustmentOptions[head] ?? { Standard: 0 };
    const adjustments = {
      head: headList[head] ?? 0,
      length: lengthList[length] ?? 0,
      grip: gripList[grip] ?? 0,
      wrap: wrapList[wrap] ?? 0,
      adjustment: allowedAdjustments[adjustment] ?? 0,
    };

    const totalAdjustment = Object.values(adjustments).reduce((sum, value) => sum + value, 0);
    const adjustmentTenths = Math.round(totalAdjustment * 10);

    const wedges = wedgeGroups.map(({ key, label, baseLength, headWeight }) => {
      const baseSwing = wedgeShaftMatrix[shaft][key];
      const baseTenths = swingToTenths(baseSwing);
      const roundedTenths = Math.round((baseTenths + adjustmentTenths) / 5) * 5;
      return {
        key, label, baseLength, headWeight, baseSwing,
        result: tenthsToSwing(roundedTenths),
      };
    });

    return { adjustments, totalAdjustment, wedges };
  }, [shaft, head, length, grip, wrap, adjustment]);

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Wedge Swingweight Calculator</h1>
        <p style={styles.subtitle}>
          All swing weights are an <strong>estimation</strong> which is calculated based on data
          <br/>that has been gathered over time and will be updated as needed.
        </p>

        <div style={styles.calculator}>
          {/* Columna izquierda - mismo formato original */}
          <div style={styles.leftCol}>
            <label>Shaft</label>
            <select style={styles.selectcontainer} value={shaft} onChange={(e) => setShaft(e.target.value)}>
              {Object.keys(wedgeShaftMatrix).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <label>Head Model</label>
            <select style={styles.selectcontainer} value={head} onChange={handleHeadChange}>
              {Object.keys(headList).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <label>Shaft Length</label>
            <select style={styles.selectcontainer} value={length} onChange={(e) => setLength(e.target.value)}>
              {Object.keys(lengthList).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <label>Grip</label>
            <select style={styles.selectcontainer} value={grip} onChange={(e) => setGrip(e.target.value)}>
              {Object.keys(gripList).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <label>Wraps</label>
            <select style={styles.selectcontainer} value={wrap} onChange={(e) => setWrap(e.target.value)}>
              {Object.keys(wrapList).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <label>Swing Weight Adjustment</label>
            <select style={styles.selectcontainer} value={adjustment} onChange={(e) => setAdjustment(e.target.value)}>
              {Object.keys(currentAdjustmentOptions).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Columna central - valores, alineados con los selectores originales */}
          <div style={styles.midCol}>
            <div title={results.wedges.map((w) => `${w.label}: ${w.baseSwing}`).join(" | ")}>
              <span>{results.wedges[0].baseSwing}</span>
            </div>
            <div><span>{formatAdjustment(results.adjustments.head)}</span></div>
            <div><span>{formatAdjustment(results.adjustments.length)}</span></div>
            <div><span>{formatAdjustment(results.adjustments.grip)}</span></div>
            <div><span>{formatAdjustment(results.adjustments.wrap)}</span></div>
            <div><span>{formatAdjustment(results.adjustments.adjustment)}</span></div>
          </div>

          {/* Columna derecha - resultados en las mismas cajas del diseño original */}
          <div style={styles.rightCol}>
            {results.wedges.map((wedge) => (
              <div key={wedge.key} style={styles.resultRow} title={`Base: ${wedge.baseSwing} | Longitud: ${wedge.baseLength} | Cabeza: ${wedge.headWeight}`}>
                <span>{wedge.label}</span>
                <span style={styles.resultBox}>{wedge.result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
      containerWrapper: {
        display: "flex",
        justifyContent: "center", // Centrado horizontal
        alignItems: "center",     // Centrado vertical (opcional)
        width: "100%",
        minHeight: "100vh",       // Ocupa toda la altura visible
        marginTop: -40,
        boxSizing: "border-box"
    },
    container: { 
      fontFamily: "sans-serif", 
      textAlign: "center",
      padding: "2.5vw", // Usa % del ancho de la ventana (viewport width)
      maxWidth: "1200px", // Límite máximo para pantallas muy grandes
      margin: "0 auto",
      fontSize: "clamp(10px, 1.1vw, 18px)", // Escala entre 14px y 18px según el ancho
    },
    title: { 
      marginTop: "30px", 
      marginBottom: "-8px",   
      fontSize: "clamp(20px, 1.5vw, 30px)", // Escala de 24px a 32px
      fontWeight: "bold", 
    },
    subtitle: { 
      fontSize: "clamp(10px, 1.15vw, 25px)", 
      color: "#555", 
     },
    calculator: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2vw", // Centra el contenedor calculator
      gap: "3vw",
      width: "100%", // Asegura que ocupe todo el ancho disponible
    },
    leftCol: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "min(30vw, 350px)",
      textAlign: "left",
    },
    rightCol: { 
      display: "flex", 
      flexDirection: "column",
      gap: "19px",
      width: "min(30vw, 300px)",
      alignItems: "center", // Centra los elementos hijos horizontalmente
    },
    midCol: { 
      display: "flex", 
      flexDirection: "column",
      marginTop: "1.6vw", 
      gap: "35px",
      marginRight: "13vw",
      width: "min(30vw, 30px)",
      textAlign: "right",// Centra los elementos hijos horizontalmente
    },
    resultRow: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid #aaaaaaff",
      background: "#e0e0e0",
      padding: "16px",
      width: "min(30vw, 450px)"
    },
    resultBox: {
      background: "#63ff1bff",
      padding: ".20vw .25vw",
      fontWeight: "bold",
      fontSize: "clamp(14px, 1.5vw, 17px)"
    },
    selectcontainer :{
      width: "min(30vw, 350px)",
      fontSize: "clamp(13px, 1.05vw, 17px)"
    }
};