const canvas = document.getElementById("mapCanvas")
const ctx = canvas.getContext("2d");
const container = document.querySelectorAll(".mainContainer");
const floatingMenu = document.getElementById("floatingMenu");
const btnDownload = document.getElementById("btnDownload");
const btnFind  = document.getElementById("btnFind");
const btnConnect = document.getElementById("btnConnect");
const btnDelete = document.getElementById("btnDelete");
const btnClear = document.getElementById("btnClear");
const btnCreate = document.getElementById("btnCreate");
const btnCancel = document.getElementById("btnCancelCreate")
const IMG_WIDTH = 7001;
const IMG_HEIGHT = 4001;

let node = [];
let connections = [];
let nextNodeId = 1;
let nextConnId = 1;
let offsetX = 0, offsetY = 0;

let bgImage = null;

function resizeCanvas() {
    const rect = container
    canvas.width = rect.width;
    canvas.height = rect.height;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

function worldToCanvas() {
    const scaleX = canvas.width / IMG_WIDTH;
    const scaleY = canvas.height / IMG_HEIGHT;
    return {
        x : (x * scaleX) + offsetX,
        y : (y * scaleY) + offsetY
    };
}

function canvasToWorld() {
    const scaleX = canvas.width / IMG_WIDTH;
    const scaleY = canvas.height / IMG_HEIGHT;
    return {
        x : (x - offsetX) / scaleX,
        y : (y - offsetY) / scaleY
    };
}

document.addEventListener("dblclick", (e) => {
        document.getElementById("addLocation").classList.remove("hidden");
});

// document.addEventListener("btnCancel", (e) => {
//     document.getElementById("addLocation").classList.
// });

function loadBackground() {
    const img =  new Image();
    img.src = "background.jpg";
}

loadBackground();


