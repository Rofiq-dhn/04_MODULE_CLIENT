const canvas = document.getElementById("canvas");
const container = document.getElementById(".mainContainer");
const floatingMenu = document.getElementById("floatingMenu");
const btnDownload = document.getElementById("btnDownload");
const btnFind  = document.getElementById("btnFind");
const btnConnect = document.getElementById("btnConnect");
const btnDelete = document.getElementById("btnDelete");
const btnClear = document.getElementById("btnClear");
const btnCreate = document.getElementById("btnCreate");

let node = [];
let connections = {};
let nextNodeId = 1;
let nextConnId = 1;
let offsetX = 0, offsetY = 0;

document.addEventListener("dblclick", (e) => {
   const addLocation = document.getElementById("addLocation").classList.remove("hidden");
});