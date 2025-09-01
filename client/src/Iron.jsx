import { useState, useMemo } from "react";

export default function IronSwing() {
  const shaftList = {
    "Accra iSeries 50i": "C8",
    "Accra iSeries 60i": "C8",
    "Accra iSeries 70i": "C8",
    "Accra iSeries 80i": "C8",
    "Accra iSteel Green 105 R - Parallel": "D1",
    "Accra iSteel Green 115 S - Parallel": "D2",
    "Accra iSteel Green 125 X - 7ir": "D4",
    "Aerotech SteelFiber Private Reserve 110S - Parallel": "C8",
    "Aerotech SteelFiber Private Reserve 60A - Parallel": "C8",
    "Aerotech SteelFiber Private Reserve 70R - Parallel": "C8",
    "Aerotech SteelFiber Private Reserve 95R - Parallel": "D0",
    "Aerotech SteelFiber Private Reserve 95S - Parallel": "C9",
    "Dynamic Gold 105 S- 7": "D2",
    "Dynamic Gold 120 S- 7": "D3",
    "Dynamic Gold 120 X- 7": "D2",
    "Dynamic Gold 95 R - Parallel": "C9",
    "Dynamic Gold 95 S - Parallel": "C9",
    "Dynamic Gold MID 115 R - Parallel": "D0",
    "Dynamic Gold MID 115 S - Parallel": "D1",
    "Dynamic Gold MID 115 X - Parallel": "D1",
    "Dynamic-Gold-105-R-7ir": "D1",
    "Dynamic-Gold-X100-X-7ir": "D2",
    "Elevate MP 95g R- Parallel": "D0",
    "Elevate MP 95g S- Parallel": "D1",
    "KBS Max Graphite 45 L- Parallel": "C7",
    "KBS Max Graphite 55 A- Parallel": "C8",
    "KBS Max Graphite 65 R- Parallel": "C8",
    "KBS-S-Taper-Lite-R-Parallel": "C9",
    "KBS-STaperLite-115-S-7ir": "C9",
    "KBS-CTaper-120-S-7ir": "D2",
    "KBS-CTaper-130-X-7ir": "D3",
    "KBS-TGIGraphite-70-R-Iron": "C9",
    "KBS-TGIGraphite-80-S-Iron": "D0",
    "KBS-Tour-110-R-7ir": "D0",
    "KBS-Tour-120-S-7ir": "D2",
    "KBS-Tour-130-X-7ir": "D1",
    "Mitsubishi MMT 50 L- Parallel": "C7",
    "Mitsubishi MMT 60 A- Parallel": "C9",
    "Mitsubishi MMT 70 R- Parallel": "C9",
    "Mitsubishi MMT 80 S- Parallel": "C9",
    "Mitsubishi MMT Taper 105 S - 7ir": "",
    "Mitsubishi MMT Taper 125 X - 7ir": "D2",
    "Nippon Modus Pro 105 R- 7": "D1",
    "Nippon-NSPro-950GH-R-7ir": "D0",
    "Nippon-NSPro-950GH-S-7ir": "D0",
    "Nippon-ModusPro-105-S-7ir": "D0",
    "Nippon-ModusPro-105-X-7ir": "D1",
    "Nippon-ModusPro-120-S-7ir": "D1",
    "Nippon-ModusPro-120-X-7ir": "D2",
    "Project X Cypher 2.0 40i 4.0 - Parallel": "C6",
    "Project X Cypher 2.0 50i 5.0 - Parallel": "C7",
    "Project X Cypher 2.0 60i 5.5 - Parallel": "C7",
    "ProjectX-PXLZ-6.0-S+-7ir": "D2",
    "ProjectX-PXLZ-6.5-X-7ir": "D3",
    "ProjectX-PX-6.5-X-7ir": "D2",
    "UST Recoil 55 Dart F1- L": "C6",
    "UST Recoil 65 Dart F2- A": "C7",
    "UST Recoil 75 Dart F3- R": "C9",
    "UST Recoil 75 Dart F4- S": "C8"
  };

  const headList = {
    "0311 XP - 7 Iron": 0,
    "0311 P - 7 Iron": 0,
    "0317 T - 7 Iron": 0,
    "0317 CB - 7 Iron": 0,
    "0317 ST - 7 Iron": 0,
    "Black Ops - 7 Iron": 0,
    "Wildcat - 7 Iron": 0,
    "0211 - 7 Iron": 0
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
    "PXG Z5 Undersize": 1,
    "PXG Z5 Standard": 0,
    "PXG Z5 Midsize": -2.5,
    "PXG Z5 Oversize": -5.5,
    "PXG Z5 Demo": 0,
    "Golf Pride Tour Velvet 360 Undersize": 0.5,
    "Golf Pride Tour Velvet 360 Standard": 0,
    "Golf Pride Tour Velvet 360 Midsize": -1,
    "Golf Pride Tour Velvet 360 Oversize": -3,
    "Golf Pride Tour Velvet Womens": 0.5,
    "Golf Pride Tour Velvet Standard": -0.5,
    "Golf Pride Tour Velvet Midsize": -1,
    "Golf Pride Tour Wrap Black Standard": 0,
    "Golf Pride Tour Wrap Black Midsize": -1,
    "Golf Pride Tour Wrap White Standard": 0,
    "Golf Pride Tour Wrap White Midsize": -1,
    "Golf Pride MCC +4 Standard": -0.5,
    "Golf Pride MCC +4 Midsize": -4,
    "Golf Pride MCC +4 Align Standard": -1,
    "Golf Pride Multi-Compound White Standard": 0.5,
    "Golf Pride Multi-Compound White Midsize": -2.5,
    "Golf Pride Z-Cord Standard": 0,
    "Golf Pride Z-Cord Midsize": -1.5,
    "Golf Pride CP2 Pro Standard": 0,
    "Golf Pride CP2 Pro Midsize": -3,
    "Golf Pride CP2 Wrap Undersize": 3,
    "Golf Pride CP2 Wrap Standard": 0,
    "Golf Pride CP2 Wrap Midsize": -3,
    "Winn Dri-Tac Ladies": 3,
    "Winn Dri-Tac Standard": 0.5,
    "Winn Dri-Tac Midsize": 0,
    "Winn Dri-Tac Oversize": 0,
    "Winn Wrap Standard": 0,
    "Winn Wrap Midsize": 0,
    "Winn Wrap Oversize": 0
  };

  const wrapList = {
    "Standard": 0,
    "1": 0,
    "2": -0.5,
    "3": -1,
    "+1 Bottom Hand": 0,
    "+2 Bottom Hand": 0,
    "+3 Bottom Hand": -0.5,
    "+1 Top Hand": 0,
    "+2 Top Hand": 0,
    "+3 Top Hand": -0.5,
    "+2 Bottom Hand, +1 Top Hand": -0.5,
    "+3 Bottom Hand, +1 Top Hand": -1,
    "+3 Bottom Hand, +2 Top Hand": -1,
    "+2 Top Hand, +1 Bottom Hand": -0.5,
    "+3 Top Hand, +1 Bottom Hand": -1,
    "+3 Top Hand, +2 Bottom Hand": -1
  };

  const adjustmentList = {
    "Standard": 0,
    "+1" : 1,
    "+2" : 2,
    "+3" : 3,
    "-1" : -1,
    "-2" : -2
  };

  const swingValues = {
    "A0": 1, "A0.5": 1.5, "A1": 2, "A1.5": 2.5, "A2": 3,
    "A2.5": 3.5, "A3": 4, "A3.5": 4.5, "A4": 5, "A4.5": 5.5,
    "A5": 6, "A5.5": 6.5, "A6": 7, "A6.5": 7.5, "A7": 8,
    "A7.5": 8.5, "A8": 9, "A8.5": 9.5, "A9": 10, "A9.5": 10.5,
    "B0": 11, "B0.5": 11.5, "B1": 12, "B1.5": 12.5, "B2": 13,
    "B2.5": 13.5, "B3": 14, "B3.5": 14.5, "B4": 15, "B4.5": 15.5,
    "B5": 16, "B5.5": 16.5, "B6": 17, "B6.5": 17.5, "B7": 18,
    "B7.5": 18.5, "B8": 19, "B8.5": 19.5, "B9": 20, "B9.5": 20.5,
    "C0": 21, "C0.5": 21.5, "C1": 22, "C1.5": 22.5, "C2": 23,
    "C2.5": 23.5, "C3": 24, "C3.5": 24.5, "C4": 25, "C4.5": 25.5,
    "C5": 26, "C5.5": 26.5, "C6": 27, "C6.5": 27.5, "C7": 28,
    "C7.5": 28.5, "C8": 29, "C8.5": 29.5, "C9": 30, "C9.5": 30.5,
    "D0": 31, "D0.5": 31.5, "D1": 32, "D1.5": 32.5, "D2": 33,
    "D2.5": 33.5, "D3": 34, "D3.5": 34.5, "D4": 35, "D4.5": 35.5,
    "D5": 36, "D5.5": 36.5, "D6": 37, "D6.5": 37.5, "D7": 38,
    "D7.5": 38.5, "D8": 39, "D8.5": 39.5, "D9": 40, "D9.5": 40.5,
    "E0": 41, "E0.5": 41.5, "E1": 42, "E1.5": 42.5, "E2": 43,
    "E2.5": 43.5, "E3": 44, "E3.5": 44.5, "E4": 45, "E4.5": 45.5,
    "E5": 46, "E5.5": 46.5, "E6": 47, "E6.5": 47.5, "E7": 48,
    "E7.5": 48.5, "E8": 49, "E8.5": 49.5, "E9": 50, "E9.5": 50.5,
    "F0": 51, "F0.5": 51.5, "F1": 52, "F1.5": 52.5, "F2": 53,
    "F2.5": 53.5, "F3": 54, "F3.5": 54.5, "F4": 55, "F4.5": 55.5,
    "F5": 56, "F5.5": 56.5, "F6": 57, "F6.5": 57.5, "F7": 58,
    "F7.5": 58.5, "F8": 59, "F8.5": 59.5, "F9": 60, "F9.5": 60.5
  };

  // --- Estado del formulario ---
  const [shaft, setShaft] = useState("Accra iSeries 50i");
  const [head, setHead] = useState("0311 XP - 7 Iron");
  const [length, setLength] = useState("Standard");
  const [grip, setGrip] = useState("PXG Z5 Standard");
  const [wrap, setWrap] = useState("Standard");
  const [adjustment, setAdjustment] = useState("Standard");

  // --- Función para buscar swing por valor ---
  const searchSwing = (value) => {
    return Object.keys(swingValues).find((key) => swingValues[key] === value);
  };

  // --- Calcular resultados ---
  const results = useMemo(() => {
    const shaftSwing = swingValues[shaftList[shaft]] ?? 0;
    const headSwing = headList[head] ?? 0;
    const lengthSwing = lengthList[length] ?? 0;
    const gripSwing = gripList[grip] ?? 0;
    const wrapSwing = wrapList[wrap] ?? 0;
    const adjustmentSwing = adjustmentList[adjustment] ?? 0;

    const baseOperation =
      shaftSwing +
      headSwing +
      lengthSwing +
      gripSwing +
      wrapSwing +
      adjustmentSwing;

    return {
      result_shaft: searchSwing(shaftSwing),
      result_head: headSwing,
      result_length: lengthSwing,
      result_grip: gripSwing,
      result_wraps: wrapSwing,
      result_adjustment: adjustmentSwing,

      irons: searchSwing(baseOperation),
      pw: searchSwing(baseOperation + 1),
      gw: searchSwing(baseOperation + 2),
      sw: searchSwing(baseOperation + 3),
      lw: searchSwing(baseOperation + 4),
    };
  }, [shaft, head, length, grip, wrap, adjustment]);

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Iron Swingweight Calculator</h1>
        <p style={styles.subtitle}>All swing weights are based off of the 7 iron</p>

        <div style={styles.calculator}>
          {/* Columna izquierda - formulario */}
          <div style={styles.leftCol}>
            <label>Shaft</label>
            <select style={styles.selectcontainer} value={shaft} onChange={(e) => setShaft(e.target.value)}>
              {Object.keys(shaftList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label>Head Model</label>
            <select style={styles.selectcontainer} value={head} onChange={(e) => setHead(e.target.value)}>
              {Object.keys(headList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label>Shaft Length</label>
            <select style={styles.selectcontainer} value={length} onChange={(e) => setLength(e.target.value)}>
              {Object.keys(lengthList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label>Grip</label>
            <select style={styles.selectcontainer} value={grip} onChange={(e) => setGrip(e.target.value)}>
              {Object.keys(gripList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label>Wraps</label>
            <select style={styles.selectcontainer} value={wrap} onChange={(e) => setWrap(e.target.value)}>
              {Object.keys(wrapList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label>Swing Weight Adjustment</label>
            <select style={styles.selectcontainer} value={adjustment} onChange={(e) => setAdjustment(e.target.value)}>
              {Object.keys(adjustmentList).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Columna medio - resultados */}
          <div style={styles.midCol}>
            <div>
              <span>{results.result_shaft > 0 ? `+${results.result_shaft}` : results.result_shaft}</span>
            </div>
            <div>
              <span>{results.result_head > 0 ? `+${results.result_head}` : results.result_head}</span>
            </div>
            <div>
              <span>{results.result_length > 0 ? `+${results.result_length}` : results.result_length}</span>
            </div>
            <div>
              <span>{results.result_grip > 0 ? `+${results.result_grip}` : results.result_grip}</span>
            </div>
            <div>
              <span>{results.result_wraps > 0 ? `+${results.result_wraps}` : results.result_wraps}</span>
            </div>
            <div>
              <span>{results.result_adjustment > 0 ? `+${results.result_adjustment}` : results.result_adjustment}</span>
            </div>
          </div>

          {/* Columna derecha - resultados */}
          <div style={styles.rightCol}>
            <div style={styles.resultRow}>
              <span>Irons (3-9)</span>
              <span style={styles.resultBox}>{results.irons}</span>
            </div>
            <div style={styles.resultRow}>
              <span>PW</span>
              <span style={styles.resultBox}>{results.pw}</span>
            </div>
            <div style={styles.resultRow}>
              <span>GW</span>
              <span style={styles.resultBox}>{results.gw}</span>
            </div>
            <div style={styles.resultRow}>
              <span>SW</span>
              <span style={styles.resultBox}>{results.sw}</span>
            </div>
            <div style={styles.resultRow}>
              <span>LW</span>
              <span style={styles.resultBox}>{results.lw}</span>
            </div>
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
        marginTop: -60,
        boxSizing: "border-box"
    },
    container: { 
      fontFamily: "sans-serif", 
      textAlign: "center",
      padding: "2.5vw", // Usa % del ancho de la ventana (viewport width)
      maxWidth: "1200px", // Límite máximo para pantallas muy grandes
      margin: "0 auto",
      fontSize: "clamp(10px, 1.5vw, 18px)", // Escala entre 14px y 18px según el ancho
    },
    title: {     
      fontSize: "clamp(20px, 1.5vw, 32px)", // Escala de 24px a 32px
      fontWeight: "bold", 
    },
    subtitle: { 
      fontSize: "clamp(12px, 1.5vw, 24px)", 
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
      gap: "10px",
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
      gap: "43px",
      marginRight: "13vw",
      width: "min(30vw, 30px)",
      textAlign: "right",// Centra los elementos hijos horizontalmente
    },
    resultRow: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid #aaaaaaff",
      background: "#e0e0e0",
      padding: "14px",
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
      fontSize: "clamp(14px, 1.2vw, 17px)"
    }
};

