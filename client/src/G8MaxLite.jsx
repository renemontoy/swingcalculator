import { useState, useMemo } from "react";

export default function MaxLiteG8() {
  const shaftList = {
    "Fujikura Pro Blue 50 - R": "C6",
    "Fujikura Pro Blue 50 - R2": "C6",
    "Fujikura Pro Blue 60 - R": "C7",
    "Fujikura Pro Blue 60 - S": "C7",
    "Fujikura Pro Blue 60 - X": "C7",
    "Fujikura Pro Blue 70 - S": "C8",
    "Fujikura Pro Blue 70 - X": "C8",
    "Fujikura Ventus VeloCore+ Black 6 - S": "C7",
    "Fujikura Ventus VeloCore+ Black 6 - X": "C7",
    "Fujikura Ventus VeloCore+ Black 7 - S": "C8",
    "Fujikura Ventus VeloCore+ Black 7 - X": "C8",
    "Fujikura Ventus VeloCore+ Blue 5 - R": "C6",
    "Fujikura Ventus VeloCore+ Blue 5 - S": "C6",
    "Fujikura Ventus VeloCore+ Blue 6 - S": "C7",
    "Fujikura Ventus VeloCore+ Blue 6 - X": "C7",
    "Fujikura Ventus VeloCore+ Blue 7 - S": "C7",
    "Fujikura Ventus VeloCore+ Blue 7 - X": "C7",
    "Fujikura Ventus VeloCore+ Red 5 - R": "C6",
    "Fujikura Ventus VeloCore+ Red 5 - R2": "C7",
    "Fujikura Ventus VeloCore+ Red 5 - S": "C7",
    "Fujikura Ventus VeloCore+ Red 6 - S": "C7",
    "Grand Bassara 29 L": "C3",
    "MCA Diamana 2023 S+ 60g- R": "C5",
    "MCA Diamana 2023 S+ 60g- S": "C5",
    "MCA Diamana 2023 S+ 60g- X": "C6",
    "MCA Diamana 2023 S+ 70g- S": "C7",
    "MCA Diamana 2023 S+ 70g- X": "C7",
    "MCA Tensei AV X-Link Blue 55 R": "C6",
    "MCA Tensei AV X-Link Blue 65 R": "C6",
    "MCA Tensei AV X-Link Blue 65 S": "C6",
    "MCA Tensei AV X-Link Blue 75 S": "C7",
    "MCA Tensei AV X-Link White 65 S": "C6",
    "MCA Tensei AV X-Link White 65 X": "C6",
    "MCA Tensei AV X-Link White 75 S": "C8",
    "MCA Tensei AV X-Link White 75 X": "C8",
    "Project X Cypher 2.0 40 4.0": "C6",
    "Project X Cypher 2.0 40 5.0": "C5",
    "Project X Cypher 2.0 40 5.5": "C5",
    "Project X Cypher 2.0 50 5.5": "C6",
    "Project X Cypher 2.0 50 6.0": "C6",
    "Project X Denali Blue 50 5.0": "C5",
    "Project X Denali Blue 50 5.5": "C5",
    "Project X Denali Blue 50 6.0": "C5",
    "Project X Denali Blue 60 5.5": "C5",
    "Project X Denali Blue 60 6.0": "C6",
    "Project X Denali Blue 60 6.5": "C6",
    "Project X Denali Blue 70 6.5": "C7",
    "Project X Denali Red 40 4.0": "C3",
    "Project X Denali Red 50 5.0": "C4",
    "Project X Denali Red 50 5.5": "C4",
    "Project X Denali Red 50 6.0": "C4",
    "Project X Denali Red 60 5.5": "C5",
    "Project X Denali Red 60 6.0": "C5",
    "Project X HZRDUS GEN5 Black 60 6.0": "C7",
    "Project X HZRDUS GEN5 Black 60 6.5": "C7",
    "Project X HZRDUS GEN5 Black 70 6.0": "C7",
    "Project X HZRDUS GEN5 Black 70 6.5": "C8",
    "Project X HZRDUS GEN5 Black 80 6.5": "C9",
    "Tour AD HD 4- R2": "C5",
    "Tour AD HD 5- R": "C6",
    "Tour AD HD 5- S": "C7",
    "Tour AD IZ 5- R": "C6",
    "Tour AD IZ 5- R2": "C6",
    "Tour AD VF 5 - S": "C6",
    "Tour AD VF 5 - X": "C6",
    "Tour AD VF 6 - S": "C7",
    "Tour AD VF 6 - X": "C7",
    "Tour AD VF 7 - S": "C8",
    "Tour AD VF 7 - X": "C8",
    "Tour AD XC 4 - R2": "C4",
    "Tour AD XC 5 - R": "C6",
    "Tour AD XC 5 - S": "C7",
    "Tour AD XC 6- S": "C7",
    "Tour AD XC 6- X": "C7",
    "Tour AD XC 7-X": "C8"
    };


  const headList = {
    "Lightning Max Lite": 0,
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

  const toeOptions = {
    "Lightning Max Lite": {
      "NA": 0
    },
    // Valor por defecto en caso de que no coincida
    "default": {
      "NA": 0
    }
  };
  
  const HeelOptions = {
    "Lightning Max Lite": {
      "NA": 0
    },
    // Valor por defecto en caso de que no coincida
    "default": {
      "NA": 0
    }
  };
  
  const BackOptions = {
    "Lightning Max Lite": {
      "12.5g": 0,
      "2.5g": -5.5,
      "5g" : -4.5,
      "7.5g": -3,
      "10g": -1.5,
      "15g": 1.5,
      "17.5g": 3,
      "20g": 4.5
    },
    // Valor por defecto en caso de que no coincida
    "default": {
      "NA": 0
    }
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
  const [shaft, setShaft] = useState("Fujikura Pro Blue 50 - R");
  const [head, setHead] = useState("Lightning Max Lite");
  const [length, setLength] = useState("Standard");
  const [grip, setGrip] = useState("PXG Z5 Standard");
  const [wrap, setWrap] = useState("Standard");
  const [toe, setToe] = useState("NA");
  const [heel, setHeel] = useState("NA");
  const [back, setBack] = useState("NA");

  // -----------TOE----------------
  // Obtener las opciones de toe según la cabeza seleccionada
  const getToeOptions = () => {
    return toeOptions[head] || toeOptions["default"];
  };
  
  // -----------HEEL----------------
  // Obtener las opciones de toe según la cabeza seleccionada
  const getHeelOptions = () => {
    return HeelOptions[head] || HeelOptions["default"];
  };
  
  // -----------HEEL----------------
  // Obtener las opciones de toe según la cabeza seleccionada
  const getBackOptions = () => {
    return BackOptions[head] || BackOptions["default"];
  };


  // Actualizar el valor de toe cuando cambie la cabeza
  const handleHeadChange = (e) => {
    const newHead = e.target.value;
    setHead(newHead);
    
    // Resetear toe a la primera opción disponible para la nueva cabeza
    const newToeOptions = getToeOptions();
    const newHeelOptions = getHeelOptions();
    const newBackOptions = getBackOptions();
    const firstToeOption = Object.keys(newToeOptions)[0];
    const firstHeelOption = Object.keys(newHeelOptions)[0];
    const firstBackOption = Object.keys(newBackOptions)[0];
    setToe(firstToeOption);
    setHeel(firstHeelOption);
    setBack(firstBackOption);
  };

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
    const toeSwing = getToeOptions()[toe] ?? 0;
    const heelSwing = getHeelOptions()[heel] ?? 0;
    const backSwing = getBackOptions()[back] ?? 0;


    const baseOperation =
      shaftSwing +
      headSwing +
      lengthSwing +
      gripSwing +
      wrapSwing +
      toeSwing +
      heelSwing + 
      backSwing
      ;

    return {
      result_shaft: searchSwing(shaftSwing),
      result_head: headSwing,
      result_length: lengthSwing,
      result_grip: gripSwing,
      result_wraps: wrapSwing,
      result_toe: toeSwing,
      result_heel: heelSwing,
      result_back : backSwing,
      driver: searchSwing(baseOperation),
    };
  }, [shaft, head, length, grip, wrap, toe, heel, back]);

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Lightning Max Lite Swingweight Calculator</h1>
        <p style={styles.subtitle}>All swing weights are an <strong>estimation</strong> which is calculated based on data 
        <br/>that has been gathered over time and will be updated as needed.</p>
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
            <select style={styles.selectcontainer} value={head} onChange={handleHeadChange}>
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

            <label>Back Weight</label>
            <select style={styles.selectcontainer} value={back} onChange={(e) => setBack(e.target.value)}>
              {Object.keys(getBackOptions()).map((item) => (
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
              <span>{results.result_back > 0 ? `+${results.result_back}` : results.result_back}</span>
            </div>
          </div>

          {/* Columna derecha - resultados */}
          <div style={styles.rightCol}>
            <div style={styles.resultRow}>
              <span>Lightning Max Lite Swing Weight</span>
              <span style={styles.resultBox}>{results.driver}</span>
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
        marginTop: -54,
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
      gap: "8px",
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
      gap: "38.5px",
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
      fontSize: "clamp(14px, 1.2vw, 17px)"
    }
};

