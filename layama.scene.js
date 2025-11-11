// Created with Motiva Layama v2.02 2002 https://www.motivacg.com/layama
// Rendered with Layama for 3dsmax - Corona:Corona version:11 (Hotfix 2)

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "game_room_vr0002", a: "A_Cam_001_Entrada2", p: new BABYLON.Vector3(176.637, 160, 323.714), l: new BABYLON.Vector3(177.637, 160, 323.714)});
   layamaCameras.push({n: "game_room_vr0000", a: "A_Cam_002_Pasillo", p: new BABYLON.Vector3(404.945, 160, 413.014), l: new BABYLON.Vector3(405.945, 160, 413.014)});
   layamaCameras.push({n: "game_room_vr0001", a: "A_Cam_003_Baño_B", p: new BABYLON.Vector3(331.393, 160, 557.316), l: new BABYLON.Vector3(330.819, 160, 556.497)});
   layamaCameras.push({n: "game_room_vr0003", a: "A_Cam_003_Baño_B2", p: new BABYLON.Vector3(441.076, 160, 817.609), l: new BABYLON.Vector3(440.653, 160, 816.702)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

