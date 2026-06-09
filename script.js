const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.getElementById(".mainContainer");
const floatingMenu = document.getElementById("floatingMenu");
const btnDownload = document.getElementById("btnDownload");
const btnFind  = document.getElementById("btnFind");
const btnConnect = document.getElementById("btnConnect");
const btnDelete = document.getElementById("btnDelete");
const btnClear = document.getElementById("btnClear");
const btnCreate = document.getElementById("btnCreate");
const IMG_WIDTH = 7001;
const IMG_HEIGHT = 4001;

let node = [];
let connections = [];
let nextNodeId = 1;
let nextConnId = 1;
let offsetX = 0, offsetY = 0;

let bgImage = null;

function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

function worldToCanvas() {
    const scaleX = canvas.width / IMG_WIDTH;
    const scaleY = canvas.height / IMG_HEIGHT;
}

// document.addEventListener("dblclick", (e) => {
//    const addLocation = document.getElementById("addLocation").classList.remove("hidden");
// });

