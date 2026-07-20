import { useState, useEffect,useMemo } from "react";

export default function IronSwingG8() {
  const shaftList = {
    "Accra iSeries 50i - Parallel": "C6.9",
    "Accra iSeries 60i - Parallel": "C7.0",
    "Accra iSeries 70i - Parallel": "C8.0",
    "Accra iSeries 80i - Parallel": "C7.7",
    "Accra iSteel Green 105 R - Parallel": "D0.0",
    "Accra iSteel Green 115 S - Parallel": "D0.7",
    "Accra iSteel Green 125 X": "D2.6",
    "Aerotech SteelFiber Private Reserve 110S - Parallel": "C9.2",
    "Aerotech SteelFiber Private Reserve 60A - Parallel": "C7.9",
    "Aerotech SteelFiber Private Reserve 70R - Parallel": "C8.8",
    "Aerotech SteelFiber Private Reserve 95R - Parallel": "C8.8",
    "Aerotech SteelFiber Private Reserve 95S - Parallel": "C9.2",
    "Dynamic Gold 95 R - Parallel": "C9.7",
    "Dynamic Gold 95 S - Parallel": "D0.8",
    "Elevate MP 95g R- Parallel": "D0.0",
    "Elevate MP 95g S- Parallel": "D1.1",
    "KBS Ctaper 120 S": "D1.9",
    "KBS Ctaper 130 X": "D2.6",
    "KBS Ctaper Lite 110 S": "D1.5",
    "KBS Max Graphite 45 L - Parallel": "C7.0",
    "KBS Max Graphite 55 A - Parallel": "C7.5",
    "KBS Max Graphite 65 R - Parallel": "C8.2",
    "KBS S Taper Lite R - Parallel": "C8.6",
    "KBS STaperLite 100 S": "D0.0",
    "KBS TGIGraphite 70 R - Parallel": "C9.0",
    "KBS TGIGraphite 80 S - Parallel": "D0.1",
    "KBS Tour 110 R": "D0.2",
    "KBS Tour 120 S": "C9.9",
    "KBS Tour 130 X": "D1.4",
    "Mitsubishi MMT 50 L - Parallel": "C7.1",
    "Mitsubishi MMT 60 A - Parallel": "C7.9",
    "Mitsubishi MMT 70 R - Parallel": "C8.3",
    "Mitsubishi MMT 80 S - Parallel": "C9.2",
    "Mitsubishi MMT Taper 105 S": "D2.3",
    "Mitsubishi MMT Taper 125 X": "D2.2",
    "Nippon Modus Pro 105 R": "D0.6",
    "Nippon Modus Pro 105 S": "D0.6",
    "Nippon Modus Pro 105 X": "D1.0",
    "Nippon Modus Pro 120 S": "D2.0",
    "Nippon Modus Pro 120 X": "D2.0",
    "Nippon NSPro 950GH R": "C9.9",
    "Nippon NSPro 950GH S": "D0.2",
    "Project X Cypher 2.0 40i 4.0 - Parallel": "C6.1",
    "Project X Cypher 2.0 50i 5.0 - Parallel": "C7.0",
    "Project X Cypher 2.0 60i 5.5 - Parallel": "C7.8",
    "Project X Denali Silver 105i 6.0 - Parallel": "C9.3",
    "Project X Denali Silver 50i 4.0 - Parallel": "C6.1",
    "Project X Denali Silver 60i 5.0 - Parallel": "C7.1",
    "Project X Denali Silver 70i 5.5 - Parallel": "C7.9",
    "Project X Denali Silver 80i 6.0 - Parallel": "C7.7",
    "ProjectX PX 6.5 X": "D2.9",
    "ProjectX PXLZ 6.0 S+": "D2.6",
    "ProjectX PXLZ 6.5 X": "D2.0",
    "True Temper Dynamic Gold 105 R": "D1.0",
    "True Temper Dynamic Gold 105 S": "D2.0",
    "True Temper Dynamic Gold 120 S": "D2.2",
    "True Temper Dynamic Gold 120 X": "D1.7",
    "True Temper Dynamic Gold MID 115 R - Parallel": "D1.1",
    "True Temper Dynamic Gold MID 115 S - Parallel": "D1.2",
    "True Temper Dynamic Gold MID 115 X - Parallel": "D1.3",
    "True Temper Dynamic Gold X100 X": "D2.3",
    "UST Recoil 55 Dart F1- L - Parallel": "C6.0",
    "UST Recoil 65 Dart F2- A - Parallel": "C6.7",
    "UST Recoil 75 Dart F3- R - Parallel": "C8.3",
    "UST Recoil 75 Dart F4- S - Parallel": "C9.0"
  };

  const headList = {
    "Gen 8 0311 XP - 7 Iron": 1.5,
    "Gen 8 0311 P - 7 Iron": 0,
    "Gen 8 0311 T - 7 Iron": 0,
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
    //"+1 Bottom Hand": 0,
    //"+2 Bottom Hand": 0,
    //"+3 Bottom Hand": -0.5,
    //"+1 Top Hand": 0,
    //"+2 Top Hand": 0,
    //"+3 Top Hand": -0.5,
    //"+2 Bottom Hand, +1 Top Hand": -0.5,
    //"+3 Bottom Hand, +1 Top Hand": -1,
    //"+3 Bottom Hand, +2 Top Hand": -1,
    //"+2 Top Hand, +1 Bottom Hand": -0.5,
    //"+3 Top Hand, +1 Bottom Hand": -1,
    //"+3 Top Hand, +2 Bottom Hand": -1
  };

  const toeList =[
    "2", "3", "4" ,"5", "6", "7",
    "8", "9", "10", "11", "12"
  ];
  
  const heelList =[
    "2", "3", "4" ,"5", "6", "7",
    "8", "9", "10", "11", "12"
  ];

  const adjustmentList = {
    "22": -2.6,
    "23": -2.2,
    "24": -1.7,
    "25": -1.3,
    "26": -0.9,
    "27": -0.4,
    "28": 0,
    "29": 0.4,
    "210": 0.9,
    "211": 1.3,
    "212": 1.7,
    "32": -2.2,
    "33": -1.7,
    "34": -1.3,
    "35": -0.9,
    "36": -0.4,
    "37": 0,
    "38": 0.4,
    "39": 0.9,
    "310": 1.3,
    "311": 1.7,
    "312": 2.2,
    "42": -1.7,
    "43": -1.3,
    "44": -0.9,
    "45": -0.4,
    "46": 0,
    "47": 0.4,
    "48": 0.9,
    "49": 1.3,
    "410": 1.7,
    "411": 2.2,
    "412": 2.6,
    "52": -1.3,
    "53": -0.9,
    "54": -0.4,
    "55": 0,
    "56": 0.4,
    "57": 0.9,
    "58": 1.3,
    "59": 1.7,
    "510": 2.2,
    "511": 2.6,
    "512": 3,
    "62": -0.9,
    "63": -0.4,
    "64": 0,
    "65": 0.4,
    "66": 0.9,
    "67": 1.3,
    "68": 1.7,
    "69": 2.2,
    "610": 2.6,
    "611": 3,
    "612": 3.5,
    "72": -0.4,
    "73": 0,
    "74": 0.4,
    "75": 0.9,
    "76": 1.3,
    "77": 1.7,
    "78": 2.2,
    "79": 2.6,
    "710": 3,
    "711": 3.5,
    "712": 3.9,
    "82": 0,
    "83": 0.4,
    "84": 0.9,
    "85": 1.3,
    "86": 1.7,
    "87": 2.2,
    "88": 2.6,
    "89": 3,
    "810": 3.5,
    "811": 3.9,
    "812": 4.3,
    "92": 0.4,
    "93": 0.9,
    "94": 1.3,
    "95": 1.7,
    "96": 2.2,
    "97": 2.6,
    "98": 3,
    "99": 3.5,
    "910": 3.9,
    "911": 4.3,
    "912": 4.8,
    "102": 0.9,
    "103": 1.3,
    "104": 1.7,
    "105": 2.2,
    "106": 2.6,
    "107": 3,
    "108": 3.5,
    "109": 3.9,
    "1010": 4.3,
    "1011": 4.8,
    "1012": 5.2,
    "112": 1.3,
    "113": 1.7,
    "114": 2.2,
    "115": 2.6,
    "116": 3,
    "117": 3.5,
    "118": 3.9,
    "119": 4.3,
    "1110": 4.8,
    "1111": 5.2,
    "1112": 5.7,
    "122": 1.7,
    "123": 2.2,
    "124": 2.6,
    "125": 3,
    "126": 3.5,
    "127": 3.9,
    "128": 4.3,
    "129": 4.8,
    "1210": 5.2,
    "1211": 5.7,
    "1212": 6.1
}

const swingValues = {
    // # A
    "A0": 1, "A0.1": 1.1, "A0.2": 1.2, "A0.3": 1.3, "A0.4": 1.4,
    "A0.5": 1.5, "A0.6": 1.6, "A0.7": 1.7, "A0.8": 1.8, "A0.9": 1.9,
    "A1": 2, "A1.1": 2.1, "A1.2": 2.2, "A1.3": 2.3, "A1.4": 2.4,
    "A1.5": 2.5, "A1.6": 2.6, "A1.7": 2.7, "A1.8": 2.8, "A1.9": 2.9,
    "A2": 3, "A2.1": 3.1, "A2.2": 3.2, "A2.3": 3.3, "A2.4": 3.4,
    "A2.5": 3.5, "A2.6": 3.6, "A2.7": 3.7, "A2.8": 3.8, "A2.9": 3.9,
    "A3": 4, "A3.1": 4.1, "A3.2": 4.2, "A3.3": 4.3, "A3.4": 4.4,
    "A3.5": 4.5, "A3.6": 4.6, "A3.7": 4.7, "A3.8": 4.8, "A3.9": 4.9,
    "A4": 5, "A4.1": 5.1, "A4.2": 5.2, "A4.3": 5.3, "A4.4": 5.4,
    "A4.5": 5.5, "A4.6": 5.6, "A4.7": 5.7, "A4.8": 5.8, "A4.9": 5.9,
    "A5": 6, "A5.1": 6.1, "A5.2": 6.2, "A5.3": 6.3, "A5.4": 6.4,
    "A5.5": 6.5, "A5.6": 6.6, "A5.7": 6.7, "A5.8": 6.8, "A5.9": 6.9,
    "A6": 7, "A6.1": 7.1, "A6.2": 7.2, "A6.3": 7.3, "A6.4": 7.4,
    "A6.5": 7.5, "A6.6": 7.6, "A6.7": 7.7, "A6.8": 7.8, "A6.9": 7.9,
    "A7": 8, "A7.1": 8.1, "A7.2": 8.2, "A7.3": 8.3, "A7.4": 8.4,
    "A7.5": 8.5, "A7.6": 8.6, "A7.7": 8.7, "A7.8": 8.8, "A7.9": 8.9,
    "A8": 9, "A8.1": 9.1, "A8.2": 9.2, "A8.3": 9.3, "A8.4": 9.4,
    "A8.5": 9.5, "A8.6": 9.6, "A8.7": 9.7, "A8.8": 9.8, "A8.9": 9.9,
    "A9": 10, "A9.1": 10.1, "A9.2": 10.2, "A9.3": 10.3, "A9.4": 10.4,
    "A9.5": 10.5, "A9.6": 10.6, "A9.7": 10.7, "A9.8": 10.8, "A9.9": 10.9,
    
    // # B
    "B0": 11, "B0.1": 11.1, "B0.2": 11.2, "B0.3": 11.3, "B0.4": 11.4,
    "B0.5": 11.5, "B0.6": 11.6, "B0.7": 11.7, "B0.8": 11.8, "B0.9": 11.9,
    "B1": 12, "B1.1": 12.1, "B1.2": 12.2, "B1.3": 12.3, "B1.4": 12.4,
    "B1.5": 12.5, "B1.6": 12.6, "B1.7": 12.7, "B1.8": 12.8, "B1.9": 12.9,
    "B2": 13, "B2.1": 13.1, "B2.2": 13.2, "B2.3": 13.3, "B2.4": 13.4,
    "B2.5": 13.5, "B2.6": 13.6, "B2.7": 13.7, "B2.8": 13.8, "B2.9": 13.9,
    "B3": 14, "B3.1": 14.1, "B3.2": 14.2, "B3.3": 14.3, "B3.4": 14.4,
    "B3.5": 14.5, "B3.6": 14.6, "B3.7": 14.7, "B3.8": 14.8, "B3.9": 14.9,
    "B4": 15, "B4.1": 15.1, "B4.2": 15.2, "B4.3": 15.3, "B4.4": 15.4,
    "B4.5": 15.5, "B4.6": 15.6, "B4.7": 15.7, "B4.8": 15.8, "B4.9": 15.9,
    "B5": 16, "B5.1": 16.1, "B5.2": 16.2, "B5.3": 16.3, "B5.4": 16.4,
    "B5.5": 16.5, "B5.6": 16.6, "B5.7": 16.7, "B5.8": 16.8, "B5.9": 16.9,
    "B6": 17, "B6.1": 17.1, "B6.2": 17.2, "B6.3": 17.3, "B6.4": 17.4,
    "B6.5": 17.5, "B6.6": 17.6, "B6.7": 17.7, "B6.8": 17.8, "B6.9": 17.9,
    "B7": 18, "B7.1": 18.1, "B7.2": 18.2, "B7.3": 18.3, "B7.4": 18.4,
    "B7.5": 18.5, "B7.6": 18.6, "B7.7": 18.7, "B7.8": 18.8, "B7.9": 18.9,
    "B8": 19, "B8.1": 19.1, "B8.2": 19.2, "B8.3": 19.3, "B8.4": 19.4,
    "B8.5": 19.5, "B8.6": 19.6, "B8.7": 19.7, "B8.8": 19.8, "B8.9": 19.9,
    "B9": 20, "B9.1": 20.1, "B9.2": 20.2, "B9.3": 20.3, "B9.4": 20.4,
    "B9.5": 20.5, "B9.6": 20.6, "B9.7": 20.7, "B9.8": 20.8, "B9.9": 20.9,
    
    //# C
    "C0": 21, "C0.1": 21.1, "C0.2": 21.2, "C0.3": 21.3, "C0.4": 21.4,
    "C0.5": 21.5, "C0.6": 21.6, "C0.7": 21.7, "C0.8": 21.8, "C0.9": 21.9,
    "C1": 22, "C1.1": 22.1, "C1.2": 22.2, "C1.3": 22.3, "C1.4": 22.4,
    "C1.5": 22.5, "C1.6": 22.6, "C1.7": 22.7, "C1.8": 22.8, "C1.9": 22.9,
    "C2": 23, "C2.1": 23.1, "C2.2": 23.2, "C2.3": 23.3, "C2.4": 23.4,
    "C2.5": 23.5, "C2.6": 23.6, "C2.7": 23.7, "C2.8": 23.8, "C2.9": 23.9,
    "C3": 24, "C3.1": 24.1, "C3.2": 24.2, "C3.3": 24.3, "C3.4": 24.4,
    "C3.5": 24.5, "C3.6": 24.6, "C3.7": 24.7, "C3.8": 24.8, "C3.9": 24.9,
    "C4": 25, "C4.1": 25.1, "C4.2": 25.2, "C4.3": 25.3, "C4.4": 25.4,
    "C4.5": 25.5, "C4.6": 25.6, "C4.7": 25.7, "C4.8": 25.8, "C4.9": 25.9,
    "C5": 26, "C5.1": 26.1, "C5.2": 26.2, "C5.3": 26.3, "C5.4": 26.4,
    "C5.5": 26.5, "C5.6": 26.6, "C5.7": 26.7, "C5.8": 26.8, "C5.9": 26.9,
    "C6": 27, "C6.1": 27.1, "C6.2": 27.2, "C6.3": 27.3, "C6.4": 27.4,
    "C6.5": 27.5, "C6.6": 27.6, "C6.7": 27.7, "C6.8": 27.8, "C6.9": 27.9,
    "C7": 28, "C7.1": 28.1, "C7.2": 28.2, "C7.3": 28.3, "C7.4": 28.4,
    "C7.5": 28.5, "C7.6": 28.6, "C7.7": 28.7, "C7.8": 28.8, "C7.9": 28.9,
    "C8": 29, "C8.1": 29.1, "C8.2": 29.2, "C8.3": 29.3, "C8.4": 29.4,
    "C8.5": 29.5, "C8.6": 29.6, "C8.7": 29.7, "C8.8": 29.8, "C8.9": 29.9,
    "C9": 30, "C9.1": 30.1, "C9.2": 30.2, "C9.3": 30.3, "C9.4": 30.4,
    "C9.5": 30.5, "C9.6": 30.6, "C9.7": 30.7, "C9.8": 30.8, "C9.9": 30.9,
    
    //# D
    "D0": 31, "D0.1": 31.1, "D0.2": 31.2, "D0.3": 31.3, "D0.4": 31.4,
    "D0.5": 31.5, "D0.6": 31.6, "D0.7": 31.7, "D0.8": 31.8, "D0.9": 31.9,
    "D1": 32, "D1.1": 32.1, "D1.2": 32.2, "D1.3": 32.3, "D1.4": 32.4,
    "D1.5": 32.5, "D1.6": 32.6, "D1.7": 32.7, "D1.8": 32.8, "D1.9": 32.9,
    "D2": 33, "D2.1": 33.1, "D2.2": 33.2, "D2.3": 33.3, "D2.4": 33.4,
    "D2.5": 33.5, "D2.6": 33.6, "D2.7": 33.7, "D2.8": 33.8, "D2.9": 33.9,
    "D3": 34, "D3.1": 34.1, "D3.2": 34.2, "D3.3": 34.3, "D3.4": 34.4,
    "D3.5": 34.5, "D3.6": 34.6, "D3.7": 34.7, "D3.8": 34.8, "D3.9": 34.9,
    "D4": 35, "D4.1": 35.1, "D4.2": 35.2, "D4.3": 35.3, "D4.4": 35.4,
    "D4.5": 35.5, "D4.6": 35.6, "D4.7": 35.7, "D4.8": 35.8, "D4.9": 35.9,
    "D5": 36, "D5.1": 36.1, "D5.2": 36.2, "D5.3": 36.3, "D5.4": 36.4,
    "D5.5": 36.5, "D5.6": 36.6, "D5.7": 36.7, "D5.8": 36.8, "D5.9": 36.9,
    "D6": 37, "D6.1": 37.1, "D6.2": 37.2, "D6.3": 37.3, "D6.4": 37.4,
    "D6.5": 37.5, "D6.6": 37.6, "D6.7": 37.7, "D6.8": 37.8, "D6.9": 37.9,
    "D7": 38, "D7.1": 38.1, "D7.2": 38.2, "D7.3": 38.3, "D7.4": 38.4,
    "D7.5": 38.5, "D7.6": 38.6, "D7.7": 38.7, "D7.8": 38.8, "D7.9": 38.9,
    "D8": 39, "D8.1": 39.1, "D8.2": 39.2, "D8.3": 39.3, "D8.4": 39.4,
    "D8.5": 39.5, "D8.6": 39.6, "D8.7": 39.7, "D8.8": 39.8, "D8.9": 39.9,
    "D9": 40, "D9.1": 40.1, "D9.2": 40.2, "D9.3": 40.3, "D9.4": 40.4,
    "D9.5": 40.5, "D9.6": 40.6, "D9.7": 40.7, "D9.8": 40.8, "D9.9": 40.9,
    
    //# E
    "E0": 41, "E0.1": 41.1, "E0.2": 41.2, "E0.3": 41.3, "E0.4": 41.4,
    "E0.5": 41.5, "E0.6": 41.6, "E0.7": 41.7, "E0.8": 41.8, "E0.9": 41.9,
    "E1": 42, "E1.1": 42.1, "E1.2": 42.2, "E1.3": 42.3, "E1.4": 42.4,
    "E1.5": 42.5, "E1.6": 42.6, "E1.7": 42.7, "E1.8": 42.8, "E1.9": 42.9,
    "E2": 43, "E2.1": 43.1, "E2.2": 43.2, "E2.3": 43.3, "E2.4": 43.4,
    "E2.5": 43.5, "E2.6": 43.6, "E2.7": 43.7, "E2.8": 43.8, "E2.9": 43.9,
    "E3": 44, "E3.1": 44.1, "E3.2": 44.2, "E3.3": 44.3, "E3.4": 44.4,
    "E3.5": 44.5, "E3.6": 44.6, "E3.7": 44.7, "E3.8": 44.8, "E3.9": 44.9,
    "E4": 45, "E4.1": 45.1, "E4.2": 45.2, "E4.3": 45.3, "E4.4": 45.4,
    "E4.5": 45.5, "E4.6": 45.6, "E4.7": 45.7, "E4.8": 45.8, "E4.9": 45.9,
    "E5": 46, "E5.1": 46.1, "E5.2": 46.2, "E5.3": 46.3, "E5.4": 46.4,
    "E5.5": 46.5, "E5.6": 46.6, "E5.7": 46.7, "E5.8": 46.8, "E5.9": 46.9,
    "E6": 47, "E6.1": 47.1, "E6.2": 47.2, "E6.3": 47.3, "E6.4": 47.4,
    "E6.5": 47.5, "E6.6": 47.6, "E6.7": 47.7, "E6.8": 47.8, "E6.9": 47.9,
    "E7": 48, "E7.1": 48.1, "E7.2": 48.2, "E7.3": 48.3, "E7.4": 48.4,
    "E7.5": 48.5, "E7.6": 48.6, "E7.7": 48.7, "E7.8": 48.8, "E7.9": 48.9,
    "E8": 49, "E8.1": 49.1, "E8.2": 49.2, "E8.3": 49.3, "E8.4": 49.4,
    "E8.5": 49.5, "E8.6": 49.6, "E8.7": 49.7, "E8.8": 49.8, "E8.9": 49.9,
    "E9": 50, "E9.1": 50.1, "E9.2": 50.2, "E9.3": 50.3, "E9.4": 50.4,
    "E9.5": 50.5, "E9.6": 50.6, "E9.7": 50.7, "E9.8": 50.8, "E9.9": 50.9,
    
    //# F
    "F0": 51, "F0.1": 51.1, "F0.2": 51.2, "F0.3": 51.3, "F0.4": 51.4,
    "F0.5": 51.5, "F0.6": 51.6, "F0.7": 51.7, "F0.8": 51.8, "F0.9": 51.9,
    "F1": 52, "F1.1": 52.1, "F1.2": 52.2, "F1.3": 52.3, "F1.4": 52.4,
    "F1.5": 52.5, "F1.6": 52.6, "F1.7": 52.7, "F1.8": 52.8, "F1.9": 52.9,
    "F2": 53, "F2.1": 53.1, "F2.2": 53.2, "F2.3": 53.3, "F2.4": 53.4,
    "F2.5": 53.5, "F2.6": 53.6, "F2.7": 53.7, "F2.8": 53.8, "F2.9": 53.9,
    "F3": 54, "F3.1": 54.1, "F3.2": 54.2, "F3.3": 54.3, "F3.4": 54.4,
    "F3.5": 54.5, "F3.6": 54.6, "F3.7": 54.7, "F3.8": 54.8, "F3.9": 54.9,
    "F4": 55, "F4.1": 55.1, "F4.2": 55.2, "F4.3": 55.3, "F4.4": 55.4,
    "F4.5": 55.5, "F4.6": 55.6, "F4.7": 55.7, "F4.8": 55.8, "F4.9": 55.9,
    "F5": 56, "F5.1": 56.1, "F5.2": 56.2, "F5.3": 56.3, "F5.4": 56.4,
    "F5.5": 56.5, "F5.6": 56.6, "F5.7": 56.7, "F5.8": 56.8, "F5.9": 56.9,
    "F6": 57, "F6.1": 57.1, "F6.2": 57.2, "F6.3": 57.3, "F6.4": 57.4,
    "F6.5": 57.5, "F6.6": 57.6, "F6.7": 57.7, "F6.8": 57.8, "F6.9": 57.9,
    "F7": 58, "F7.1": 58.1, "F7.2": 58.2, "F7.3": 58.3, "F7.4": 58.4,
    "F7.5": 58.5, "F7.6": 58.6, "F7.7": 58.7, "F7.8": 58.8, "F7.9": 58.9,
    "F8": 59, "F8.1": 59.1, "F8.2": 59.2, "F8.3": 59.3, "F8.4": 59.4,
    "F8.5": 59.5, "F8.6": 59.6, "F8.7": 59.7, "F8.8": 59.8, "F8.9": 59.9,
    "F9": 60, "F9.1": 60.1, "F9.2": 60.2, "F9.3": 60.3, "F9.4": 60.4,
    "F9.5": 60.5, "F9.6": 60.6, "F9.7": 60.7, "F9.8": 60.8, "F9.9": 60.9
}


  // --- Estado del formulario ---
  const [shaft, setShaft] = useState("Accra iSeries 50i - Parallel");
  const [head, setHead] = useState("Gen 8 0311 XP - 7 Iron");
  const [length, setLength] = useState("Standard");
  const [grip, setGrip] = useState("PXG True Temper Icon Standard (Default)");
  const [wrap, setWrap] = useState("Standard");
  const [toe, setToe] = useState("5");
  const [heel, setHeel] = useState("5");


  const [adjustment, setAdjustment] = useState("22");

      // Función que se ejecuta cuando cambian toe o heel
  useEffect(() => {
    setAdjustment(toe + heel);
  }, [toe, heel]); // Se ejecuta cuando toe o heel cambian

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
    
    const roundbaseOperation = Math.round(baseOperation * 2) / 2;
    console.log("Base operation", baseOperation);
    console.log("Round Base operation", roundbaseOperation);

    return {
      result_shaft: searchSwing(shaftSwing),
      result_head: headSwing,
      result_length: lengthSwing,
      result_grip: gripSwing,
      result_wraps: wrapSwing,
      result_adjustment: adjustmentSwing,

      irons: searchSwing(roundbaseOperation),
      pw: searchSwing(roundbaseOperation + 1),
      gw: searchSwing(roundbaseOperation + 2),
      sw: searchSwing(roundbaseOperation + 3),
      lw: searchSwing(roundbaseOperation + 4),
    };
  }, [shaft, head, length, grip, wrap, adjustment]);

  return (
    <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Iron Swingweight Calculator</h1>
        <p style={styles.subtitle}>All swing weights are based off of the 7 iron</p>
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

            <label>Toe Weight</label>
            <select style={styles.selectcontainer} value={toe} onChange={(e) => setToe(e.target.value)}>
              {toeList.map((item) => (
                <option key={item} value={item}>
                {item}
                </option>
              ))}
            </select>

            <label>Heel Weight</label>
            <select style={styles.selectcontainer} value={heel} onChange={(e) => setHeel(e.target.value)}>
              {heelList.map((item) => (
                <option key={item} value={item}>
                {item}
                </option>
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
            <div style={{marginTop:30}}>
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